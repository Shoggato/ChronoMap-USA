// var map_dates holds strings of dates in our data ranges
var map_dates = ['2020-01-22',
'2020-01-23',
'2020-01-24',
'2020-01-25',
'2020-01-26',
'2020-01-27',
'2020-01-28',
'2020-01-29',
'2020-01-30',
'2020-01-31',
'2020-02-01',
'2020-02-02',
'2020-02-03',
'2020-02-04',
'2020-02-05',
'2020-02-06',
'2020-02-07',
'2020-02-08',
'2020-02-09',
'2020-02-10',
'2020-02-11',
'2020-02-12',
'2020-02-13',
'2020-02-14',
'2020-02-15',
'2020-02-16',
'2020-02-17',
'2020-02-18',
'2020-02-19',
'2020-02-20',
'2020-02-21',
'2020-02-22',
'2020-02-23',
'2020-02-24',
'2020-02-25',
'2020-02-26',
'2020-02-27',
'2020-02-28',
'2020-02-29',
'2020-03-01',
'2020-03-02',
'2020-03-03',
'2020-03-04',
'2020-03-05',
'2020-03-06',
'2020-03-07',
'2020-03-08',
'2020-03-09',
'2020-03-10',
'2020-03-11',
'2020-03-12',
'2020-03-13',
'2020-03-14',
'2020-03-15',
'2020-03-16',
'2020-03-17',
'2020-03-18',
'2020-03-19',
'2020-03-20',
'2020-03-21',
'2020-03-22',
'2020-03-23',
'2020-03-24',
'2020-03-25',
'2020-03-26',
'2020-03-27',
'2020-03-28',
'2020-03-29',
'2020-03-30',
'2020-03-31',
'2020-04-01',
'2020-04-02',
'2020-04-03',
'2020-04-04',
'2020-04-05',
'2020-04-06',
'2020-04-07',
'2020-04-08',
'2020-04-09',
'2020-04-10',
'2020-04-11',
'2020-04-12',
'2020-04-13',
'2020-04-14',
'2020-04-15',
'2020-04-16',
'2020-04-17',
'2020-04-18',
'2020-04-19',
'2020-04-20',
'2020-04-21',
'2020-04-22',
'2020-04-23',
'2020-04-24',
'2020-04-25',
'2020-04-26',
'2020-04-27',
'2020-04-28',
'2020-04-29',
'2020-04-30',
'2020-05-01',
'2020-05-02',
'2020-05-03',
'2020-05-04',
'2020-05-05',
'2020-05-06',
'2020-05-07',
'2020-05-08',
'2020-05-09',
'2020-05-10',
'2020-05-11',
'2020-05-12',
'2020-05-13',
'2020-05-14',
'2020-05-15',
'2020-05-16',
'2020-05-17',
'2020-05-18',
'2020-05-19',
'2020-05-20',
'2020-05-21',
'2020-05-22',
'2020-05-23',
'2020-05-24',
'2020-05-25',
'2020-05-26',
'2020-05-27',
'2020-05-28',
'2020-05-29',
'2020-05-30',
'2020-05-31',
'2020-06-01',
'2020-06-02',
'2020-06-03',
'2020-06-04',
'2020-06-05',
'2020-06-06',
'2020-06-07',
'2020-06-08',
'2020-06-09',
'2020-06-10',
'2020-06-11',
'2020-06-12',
'2020-06-13',
'2020-06-14',
'2020-06-15',
'2020-06-16',
'2020-06-17',
'2020-06-18',
'2020-06-19',
'2020-06-20',
'2020-06-21',
'2020-06-22',
'2020-06-23',
'2020-06-24',
'2020-06-25',
'2020-06-26',
'2020-06-27',
'2020-06-28',
'2020-06-29',
'2020-06-30',
'2020-07-01',
'2020-07-02',
'2020-07-03',
'2020-07-04',
'2020-07-05',
'2020-07-06',
'2020-07-07',
'2020-07-08',
'2020-07-09',
'2020-07-10',
'2020-07-11',
'2020-07-12',
'2020-07-13',
'2020-07-14',
'2020-07-15',
'2020-07-16',
'2020-07-17',
'2020-07-18',
'2020-07-19',
'2020-07-20',
'2020-07-21',
'2020-07-22',
'2020-07-23',
'2020-07-24',
'2020-07-25',
'2020-07-26',
'2020-07-27',
'2020-07-28',
'2020-07-29',
'2020-07-30',
'2020-07-31',
'2020-08-01',
'2020-08-02',
'2020-08-03',
'2020-08-04',
'2020-08-05',
'2020-08-06',
'2020-08-07',
'2020-08-08',
'2020-08-09',
'2020-08-10',
'2020-08-11',
'2020-08-12',
'2020-08-13',
'2020-08-14',
'2020-08-15',
'2020-08-16',
'2020-08-17',
'2020-08-18',
'2020-08-19',
'2020-08-20',
'2020-08-21',
'2020-08-22',
'2020-08-23',
'2020-08-24',
'2020-08-25',
'2020-08-26',
'2020-08-27',
'2020-08-28',
'2020-08-29',
'2020-08-30',
'2020-08-31',
'2020-09-01',
'2020-09-02',
'2020-09-03',
'2020-09-04',
'2020-09-05',
'2020-09-06',
'2020-09-07',
'2020-09-08',
'2020-09-09',
'2020-09-10',
'2020-09-11',
'2020-09-12',
'2020-09-13',
'2020-09-14',
'2020-09-15',
'2020-09-16',
'2020-09-17',
'2020-09-18',
'2020-09-19',
'2020-09-20',
'2020-09-21',
'2020-09-22',
'2020-09-23',
'2020-09-24',
'2020-09-25',
'2020-09-26',
'2020-09-27',
'2020-09-28',
'2020-09-29',
'2020-09-30',
'2020-10-01',
'2020-10-02',
'2020-10-03',
'2020-10-04',
'2020-10-05',
'2020-10-06',
'2020-10-07',
'2020-10-08',
'2020-10-09',
'2020-10-10',
'2020-10-11',
'2020-10-12',
'2020-10-13',
'2020-10-14',
'2020-10-15',
'2020-10-16',
'2020-10-17',
'2020-10-18',
'2020-10-19',
'2020-10-20',
'2020-10-21',
'2020-10-22',
'2020-10-23',
'2020-10-24',
'2020-10-25',
'2020-10-26',
'2020-10-27',
'2020-10-28',
'2020-10-29',
'2020-10-30',
'2020-10-31',
'2020-11-01',
'2020-11-02',
'2020-11-03',
'2020-11-04',
'2020-11-05',
'2020-11-06',
'2020-11-07',
'2020-11-08',
'2020-11-09',
'2020-11-10',
'2020-11-11',
'2020-11-12',
'2020-11-13',
'2020-11-14',
'2020-11-15',
'2020-11-16',
'2020-11-17',
'2020-11-18',
'2020-11-19',
'2020-11-20',
'2020-11-21',
'2020-11-22',
'2020-11-23',
'2020-11-24',
'2020-11-25',
'2020-11-26',
'2020-11-27',
'2020-11-28',
'2020-11-29',
'2020-11-30',
'2020-12-01',
'2020-12-02',
'2020-12-03',
'2020-12-04'];
mapRender();     //mapRender() calls the function below to start the map layer render

// This is the basemaps courtesy of openstreetmap.org/
var map = new L.Map("map", { center: [37.8, -96.9], zoom: 3 })                          //this centers the base map on the USA
  .addLayer(new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This is the top right controller    https://leafletjs.com/examples/choropleth/
// This is the hover.controller that shows the info for each state on the top right
const info = L.control({positiong: 'topright' });   //sets up a controller on the top right of the map

// this adds a DOM which is the go between my listeners (changeDropDown) and displaying of the data on the top right of the map
info.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};

// this holds the data the string that will update with the dynamic variables as someone mouses over the states
info.update = function (props) {
  const contents = props ? `<b>${props.name}</b><br />${props.states_value} ${props.units}` : 'Hover over a state';
  this._div.innerHTML = `<h4>US Covid Information</h4>${contents}`;
};
info.addTo(map);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  THIS IS THE CONTROL BOTTOM RIGHT  
var dropSelection = L.control({position: 'bottomright' });    //tells where the legend controller w

dropSelection.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info_Selection');
  div.innerHTML = '<select id="info_Selection"><option value="confirmed">Covid Confirmed</option><option value="deaths">Covid Deaths</option><option value="infectionRate">Covid Infection Rate</option></select>';
  div.firstChild.onmousedown = div.firstChild.ondblclick = L.DomEvent.stopPropagation;
  return div;
};
dropSelection.addTo(map);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var svg = d3.select(map.getPanes().overlayPane).append("svg"),                        //this creates an overlay svg which the vectors are being drawn over the basemap
  g = svg.append("g").attr("class", "leaflet-zoom-hide");                          // this appends a svg function to var g so that when called later post transform svg will then create vectors

function changeDropDown() {                                                        //this function holds the event listeners for the date bar and the drop down 
  const elem = document.getElementById('info_Selection');
  if (elem !== undefined) {
    elem.addEventListener("change", mapRender)
  }
  const dateElem = document.getElementById('date_selector');
  if (dateElem !== undefined) {
    dateElem.addEventListener("change", mapRender)
  }
};

// The following function calls the data from flask, then takes the coordinates of each state as a geoJson coord, then convertes it to a SVG layer, 
// this function borrows heavily from https://bost.ocks.org/mike/leaflet/, His entire code blocks have been utilized below to convert geoJSON coords to SVG vectors to draw the overlay on the map  The coloring, and other on map features were borrowed from https://leafletjs.com/examples/choropleth/; additional information was needed for me to fully understand what was going on
// the https://leafletjs.com/examples/geojson/ was utilized
function mapRender(event) {

  var legend_selector = document.getElementById('info_Selection');                                      //sets element grab to a variable
  var value = event === undefined ? "confirmed" : info_Selection.value;                                 //if variable is undefined then set to "confirmed", this is so that the first overlay shown for the map is Covid Confirmed
  var date = window.map_dates[parseInt(document.getElementById('date_selector').value)];                 //bootstrap call for the timebar

  document.getElementById("date_name").textContent = "Date: " + date;                                    //this will print the date on the webpage that the scroll bar is on. document is used to reference the html page

  d3.json("covid_data/" + value + "/" + date, function (error, collection) {                             //read in the time and the data from anime.js timebar
    if (error) throw error;

    if (window.geojson_layer !== undefined) {                                                            //clears the overlay layer so that the next layer can be loaded.
      map.removeLayer(window.geojson_layer);
    };

    /* global statesData */
    window.geojson_layer = L.geoJson(collection, {          //window holds global variables that were defined by var at module level.
      style,
      onEachFeature
    });

    const geojson = geojson_layer.addTo(map);                //adds the layer

    // get color depending on population density value
    function getColor(d) {
      if ((value) == "confirmed") {                           //confirmed states will go from lighter pink to magenta the higher the values are.
        return d > 3000 ? '#cc2670' :
          d > 1000 ? '#d44c7f' :
            d > 900 ? '#db698f' :
              d > 700 ? '#e0839f' :
                d > 500 ? '#e59cb0' :
                  d > 300 ? '#e8b5c1' :
                    d > 100 ? '#eacdd3' :
                      d <= 0 ? '#eae5e6' : '#eae5e6';
      }
      else if ((value) == "deaths") {                            //death counts in states will go from the same light red as confirmed but to a scarlet red
        return d > 1000 ? '#e62626' :
          d > 700 ? '#f04948' :
            d > 500 ? '#f66668' :
              d > 300 ? '#f98186' :
                d > 100 ? '#f99ba2' :
                  d > 50 ? '#f6b4bc' :
                    d > 25 ? '#f1cdd2' :
                      d >= 0 ? '#eae5e6' : '#eae5e6';
      }
      else if ((value) == "infectionRate") {                    //infectionRate counts in states will go from light green to puke green
        return d > 2000 ? '#579731' :
          d > 1000 ? '#8c9c3b' :
            d > 900 ? '#b4a152' :
              d > 700 ? '#d2a871' :
                d > 500 ? '#e4b293' :
                  d > 300 ? '#edc0b5' :
                    d > 100 ? '#edd2d1' :
                      d >= 0 ? '#eae5e6' : '#eae5e6';
      }
    };

    function style(feature) {                                               //this sets the style utilizing data from feature
      return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
        fillColor: getColor(feature.properties.states_value)
      };
    };


    function highlightFeature(e) {                                             // sets up the highlight style around the states
      const layer = e.target;

      layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
      });

      layer.bringToFront();

      info.update(layer.feature.properties);
    };

    function resetHighlight(e) {                                                 //resets the highlight style around the states
      geojson.resetStyle(e.target);
      info.update();
    };

    function onEachFeature(feature, layer) {                                   //combines the two features highlightFeature, and resetHighlight functions for mousing on and off.
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
      });
    };

    var transform = d3.geo.transform({ point: projectPoint }),                 //variable that holds the goejson transform object that had been converted to a SVG
      path = d3.geo.path().projection(transform);

    var feature = g.selectAll("path").data(collection.features).enter().append("path");

    map.on("moveend", reset);
    reset();

    // Reposition the SVG to cover the features.  this is a custom function that Mike Bostock (https://bost.ocks.org/mike/leaflet/) made so that the translation/ transfomation of the overlay will reposition itself
    function reset() {
      var bounds = path.bounds(collection),
        topLeft = bounds[0],
        bottomRight = bounds[1];

      svg.attr("width", bottomRight[0] - topLeft[0])
        .attr("height", bottomRight[1] - topLeft[1])
        .style("left", topLeft[0] + "px")
        .style("top", topLeft[1] + "px");

      g.attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");

      feature.attr("d", path);

      feature.attr("class", path.properties);
    }

    // Use Leaflet to implement a D3 geometric transformation. https://bost.ocks.org/mike/leaflet/ Mike Bostock custom function
    function projectPoint(x, y) {                                //this function converts lat/long coords into vectors that svg can then utilize to draw on the overlay map
      var point = map.latLngToLayerPoint(new L.LatLng(y, x));
      this.stream.point(point.x, point.y);
    }
  });
};

changeDropDown();  //on function change it calls back to the top which activates the DOM to call the new data with mapRender()



