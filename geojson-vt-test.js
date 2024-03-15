const fs = require('fs'); // Node.js file system module

const geojsonvt = require('geojson-vt');

// Read the GeoJSON file
const geoJSONFilePath = "C:\\Users\\Jamie Buell\\Documents\\tract_income.geojson";
const geoJSONData = fs.readFileSync(geoJSONFilePath, 'utf8');

// Parse the GeoJSON data into an object
const geoJSONObject = JSON.parse(geoJSONData);

// Create the vector tile index
var tileIndex = geojsonvt(geoJSONObject);

// Now you need to define the variables z, x, and y before using them in tileIndex.getTile(z, x, y).features
// For example:
var z = 0; // zoom level
var x = 0; // tile column
var y = 0; // tile row

// Retrieve the features for the specified tile
var features = tileIndex.getTile(z, x, y).features;

// Output the tile coordinates created so far
console.log(tileIndex.tileCoords);
