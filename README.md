# Project-3
outbreak covid 2020 -2021
## API 
- We utilized pandas to read in the API. Once the API was read in, we then created a dataframe to save the data. I first converted out the date column, and we then grouped the data by State. Once the data was grouped by State, the sum was calculated to get the total number of Confirmed Cases and Confirmed Deaths from 03-01-2020 to 03-01-2021. A new dataframe was created and saved as a csv file which was later converted to sqlite file for flask app. 

## Flask
-Using flask, flask-render_template, sqlite3, pandas, json.

-Flask
    Read in two seperate Databases ('states.db', 'cleandata') and a Json file which held the geometries for each state and two u.s. territories (D.C. and Puerto Rico) with sqlite in the flask_app. 

    Utilizing the @app.route('/covid_data/<map_type>/<selected_date>', methods=['GET']).  This is a dynamic app route where only data can be retrieved.  Using a connection through sqlite3 a query call which will select the state column and map_type column from the states.db for a user who chooses selected_date value.  The map_types were Covid_confirmed, Deaths_confirmed, and infectionRate which are selectable on the dashboard.  Leaflets GeoJSON requires a very specific format for its function to work properly for drawing objects as an overlay. https://leafletjs.com/examples/geojson/
    
![geojson example](<images/geojson_example.png>)<br>

    Type had to have a ‘type’ key with value feature, a ‘properties’ key dictionary would hold the values that was selected on the drop down of the map based on the date.  and finally the key ‘geometry’ needed to have both a ‘type’ key and a ‘coordinates’ key.  This is why in the beginning of flask this code was required (with open('Resources/state_geometries.json', 'r')).

![loop for data](<images/data_loop.png>)<br>

    This was then returned to to my javascript d3 call with: return json.dumps(return_data)

    The second call was a static call that needed to first seperate out each series as a list, then combined as a dictionary and then again returned: return json.dumps()

![static call](<images/static_call.png>)<br>

## Dynamic Map
- Using libraries D3, Leaflet, GeoJson, and Bootstrap.

-preface:
    Most of the code for this map is not mine, I do not own any of the javascript code.  I utilized Mike Bostock who does an excellent explanation of how to convert Geojson to SVG vectors and creating a map.  Using his code I was able to set up the initial map.  His website can be found here https://bost.ocks.org/mike/leaflet/.  I also borrowed certain elements from the example that Leaflet has on their own webpage for this choropleth map https://leafletjs.com/examples/choropleth/.  Finally there is specific format that the data is required to be in for Bostock’s code to work and that can be found here https://leafletjs.com/examples/geojson/ and it was referenced above in the flask section in more detail.

-dynamic map
    The Javascript which is in the static/js/logic.js file of the main directory held the map functionality while our flask app named app.py in the main directory would store the data.  Using openstreetmaps from class as the base layer for my map, there are two controllers, the top right controller will show the data that is current for each state based on the date and the map_type that the user has selected from the bottom right controller which is a drop down. There is a slider which was built with bootstrap that allows the user to select the date they want to be shown on the map.

![image of working map](<images/image of map.png>)

    The first step for generating the map prior to calling the function mapRender(), two variables needed to be created, one was svg, and g.

![svg, g](<images/svg_g.png>)<br>

    These two variables will be used so that the when the map is moved the ‘states’ will disappear and reappear and be drawn correctly.

    The function mapRender() has the functions that are required to draw a SVG layer from a dynamic d3.json call which is displayed below.

![d3.json(dynamic call)](<images/d3.json.png>)<br>

    This data is fed into this custom function that Mike Bostock had developed himself.

![custom function](<images/Mike_Bostock_custom.png>)<br>

    This code will take the points and convert the GeoJSON to SVG.

![variable feature](<images/feature.png>)<br>

    The variable feature holds the SVG points.  The selection.attr method draws between the points on the map overlay.

![svg.attribute](<images/svg.attr.png>)<br>

    This will draw and redraw the map when the map is moved.

    Finally with Leaflet layer called geojson_layer the data Collection, the style, and the onEachFeature is called.  This populates the map with the layer overlay which has the states and the different colors based on which map_type is chosen and the date by the user.  
    The inputs were set up prior to mapRender().  There is a Document Object Model (DOM) for both objects. The ‘topright’ is the hover which asks for the user to put their mouse over any state and they will see the state name and the map_type which they would select from the drop down on the ‘bottomright’.

![controllers and their DOMs hehe](<images/DOM_Controllers.png>)<br>

## HTML
-Using libraries bootstrap css, bootstrap javascript, CSS file

    Bootstrap javascript was utilized here with a range bar slider which allowed the user to select a date to change.
![bootstrap html](<images/bootstrap_html.png>)
![bootstrap javascript](<images/bootstrap_JS.png>)

## Plotly
- We utilized plotly to plot our pie and bar graphs. We first read in the json file and then set the data equal to variables to call the data for our plots. We calculated the percentage to get an estimated percentage of confirmed deaths. We then created trace1, trace2, layout, and layout2 for our graphs. We then used plotly to plot our bar and pie graph on the dashboard page.  
![Screenshot (138)](https://github.com/Shoggato/Project-3/assets/134284646/e74742bb-e2c9-4957-b7ee-c47ae14c75e9)
![Screenshot (139)](https://github.com/Shoggato/Project-3/assets/134284646/896c0189-e274-4eef-af5f-00c5b007de92)
