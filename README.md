## ChronoMap USA: A Year in GeoVolution
## Flask Web Application for COVID-19 Visualization

This project is a Flask web application that visualizes COVID-19 data using Leaflet.js for map rendering and D3.js for data manipulation. The application fetches data from a SQLite database containing COVID-19 statistics and displays the information on an interactive map.

## Project Structure

`webserver.py`

This Python script initializes a Flask web server and sets up routes for rendering HTML templates and serving COVID-19 data. It uses SQLite for data storage and leverages the pandas library for data manipulation. The script defines two main routes:

* `/`: Renders the main dashboard page(`index.html`).
* `/covid_data/<map_type>/<selected_data>`: A dynamic route that retrieves COVID-19 data based on the selected map type and date.

## Dependencies

* Flask: `flask`
* SQLite: `sqlite3`
* Data manipulation: `pandas`
* Web scraping: `beautifulsoup4`
* Data visualization: `leaflet.js`,`d3.js`

## Project Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/covid-19-visualization.git
cd covid-19-visualization
```

2. Install dependencies:

```bash
pip install flask beautifulsoup4 pandas
```

3. Run the Flask application:

```bash
python webserver.py
```
The application will be accessible at http://127.0.0.1:5000/.

## Data Sources

* COVID-19 statistics are stored in an SQLite database(`Resources/states.db`).
* Geographical data for states is retreived from a GeoJSON file(`Resources/state_geometries.json`).

## Javascript(`logic.js`)

The JavaScript file `logic.js` handles the client-side logic for rendering the map using Leaflet.js and D3.js. It defines functions for fetching data from the Flask server, updating the map based on user interactions, and styling the map features.

## Map Rendering

The script initializes a Leaflet map centered on the USA and adds a base layer from OpenStreetMap. It also sets up controllers for user interaction, such as a date selector and a dropdown for selecting COVID-19 data types.

## COVID-19 Data Visualization

The `mapRender` function fetches COVID-19 data from the Flask server based on user selections and renders the data as SVG vectors on the Leaflet map. The map features are styled based on the selected data type (confirmed cases, deaths, or infection rate) and the corresponding values.

## Acknowledgements

* This project utilizes Flask for web server functionality, Leaflet.js for map rendering, and D3.js for data manipulation and visualization.

* GeoJSON data for state geometries is obtained from `Resources/state_geometries.json`.

* COVID-19 statistics are retrieved from an SQLite database (`Resources/states.db`).

* The map design is inspired by examples from Leaflet.js documentation (https://leafletjs.com/examples/).

* Data manipulation techniques are influenced by D3.js examples and Mike Bostock's work (https://bost.ocks.org/mike/).
