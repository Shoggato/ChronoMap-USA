import sqlite3
import flask
from flask import render_template
import pandas as pd
import json

app = flask.Flask(__name__)   #required in the begining of flask app.

STATESDATABASE = 'Resources/states.db'    #database path for covid map data

# state_geometries_df = pd.read_json("Resources/state_geometries.json")
with open('Resources/state_geometries.json', 'r') as f:
    state_geometries_df = pd.DataFrame({'state': i['properties']['name'], 'geometry': i['geometry']} for i in json.load(f)['features'])  #list comprehension that makes a dictionary of the necessary parts of state_geometries, reads it in at the beginning of the flask app 

# this function sets up flask to open a sqlite3 connection to the database which is saved above
def get_states_db():
    db = getattr(flask.g, '_database', None)
    if db is None:
        db = flask.g._database = sqlite3.connect(STATESDATABASE)
    return db

# this shuts down the connection after the app runs and the data is pulled
@app.teardown_appcontext
def close_connection(exception):
    db = getattr(flask.g, '_database', None)
    if db is not None:
        db.close()

@app.route('/', methods=['GET'])   #starter route that grabs index.html from templates folder to start dashboard page
def welcome():
    return render_template('index.html')

@app.route('/covid_data/<map_type>/<selected_date>', methods=['GET'])    #this is a dynamic app route, where methods is only retrieve information only
def covid_data(map_type:str, selected_date:str):
    cur = get_states_db()     #cursor that tells the database where to select information from a query
    # data = pd.read_sql_query(f'SELECT state, {map_type}, date FROM states', cur)  #pandas sql query data that is dynamic for state, and map_type, from table states with where date is dynamic
    data = pd.read_sql_query(f'SELECT state, {map_type} FROM states WHERE date = "{selected_date}"', cur)  #pandas sql query data that is dynamic for state, and map_type, from table states with where date is dynamic
    data[map_type] = data[map_type].round(0)
    # set up bins to seperate the data into neat chunks so that they will be plotable
    bins = {
        'confirmed': [0, 221642, 443284, 664926, 886568, 1108210, 1329852, 1551494, 1773136],
        'deaths': [0, 7042, 14084, 21126, 28168, 35210, 44252, 49294, 56336],
        'infectionRate': [0, 1154, 2308, 3462, 4616, 5770, 6924, 8078, 9232]
    }
   
    units = {
        'confirmed': 'Covid Confirmed',
        'deaths': 'Covid Deaths',
        'infectionRate': 'Infection Rate per 100K Pop.'
    }


    
    data['bin'] = pd.cut(data[map_type], bins[map_type], include_lowest=True)   #this cuts the data that was selected by use into chunks based on the users selection
    data['bin_name'] = data['bin'].apply(lambda x:f'{map_type}_{x.right}')  #this applys a lambda function to select the right side of 'bin' value to convert the single value into a string so s


    #this is to make an extra column so that regardless whether there is data on a state it will be drawn on the map
    merged_data = state_geometries_df.merge(data, on='state', how='left')   #merge state_geometries (dataframe from the beginning of the app) on 'state' so that the geometries will be available for each state to be drawn
    merged_data['bin_name'] = merged_data['bin_name'].fillna(f'{map_type}_{bins[map_type][1]}.0')      #fill in all the bin_name values that are NaN with the map_type and set it to the first bin
    merged_data[f'{map_type}'] = merged_data[f'{map_type}'].fillna(0.0)    #reasonable expectation, if there isn't any data recorded for a day then the value is zero (this is an assumption)

    #  merge the data to dictionary so that it can be run through and populate it with either the index name or the value later.
    merged_dicts = merged_data.to_dict(orient='index')

    # GeoJson requires the following code, it takes very specific data for it to properly plot coordinates https://leafletjs.com/examples/geojson/.
    feature_list = list()
    for i, v in merged_dicts.items(): 
        feature_list.append({'type': 'Feature', 'id': str(i),
                              'properties': {'name': v['state'], 'bin_name': v['bin_name'], 'states_value': v[map_type], 'units': units[map_type]},
                              'geometry': v['geometry']})

    return_data = {'type': 'FeatureCollection', 'features': feature_list} 

    return json.dumps(return_data)

if __name__ == '__main__':      #when app runs it runs main code above
    app.run(debug=True)

# app.run(debug=True)   #utilized this to trouble shoot my app to logic.js so I could fix issues.
