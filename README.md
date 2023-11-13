# Project-3
outbreak covid 2020 -2021
## Overview 
- I found a Kaggle data set which had Covid-19 data between 2020-22-01 To 2020-12-04. I cleaned the data using Pandas so only five columns were preserved, [["date", "Positive", "Deaths", "infectionRate"]].  Utilizing dynamic calls using Flask and JavaScript.  A map of the USA highlights each state, where you can hover over the state and see for the date selected between Covid Deaths, Confirmed Positives, InfectionRate.

## Flask
-Using flask, flask-render_template, sqlite3, pandas, json.

-Flask
    Read in two seperate Databases ('states.db') and a Json file which held the geometries for each state and two u.s. territories (D.C. and Puerto Rico) with sqlite in the flask_app. 

    Utilizing the @app.route('/covid_data/<map_type>/<selected_date>', methods=['GET']).  This is a dynamic app route where only data can be retrieved.  Using a connection through sqlite3 a query call which will select the state column and map_type column from the states.db for a user who chooses selected_date value.  The map_types were Covid_confirmed, Deaths_confirmed, and infectionRate which are selectable on the dashboard.  Leaflets GeoJSON requires a very specific format for its function to work properly for drawing objects as an overlay. https://leafletjs.com/examples/geojson/
    
![geojson example](<images/geojson_example.png>)<br>

    Type had to have a ‘type’ key with value feature, a ‘properties’ key dictionary would hold the values that was selected on the drop down of the map based on the date.  and finally the key ‘geometry’ needed to have both a ‘type’ key and a ‘coordinates’ key.  This is why in the beginning of flask this code was required (with open('Resources/state_geometries.json', 'r')).

![loop for data](<images/data_loop.png>)<br>

    This was then returned to to my javascript d3 call with: return json.dumps(return_data)

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


