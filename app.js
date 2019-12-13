const request = require('request');

const darkSky =
  'https://api.darksky.net/forecast/3b22ee6d97112360bbfc136bdb59240e/33.976,-118.4484';

request({ url: darkSky, json: true }, (error, response) => {
  const data = response.body;
  console.log(
    data.daily.data[0].summary,
    `Currently it is ${data.currently.temperature} degrees out there.  There is a ${data.currently.precipProbability}% chance of rain`
  );
});

const mapBox =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmFsYW5jZTgiLCJhIjoiY2s0M242MTMzMDlyMzNscXkxMGdpbXBoMyJ9.1a-gsPnSO1stB0NkDPrbeg&limit=1';

request({ url: mapBox, json: true }, (error, response) => {
  const longitude = response.body.features[0].center[0];
  const latitude = response.body.features[0].center[1];
  console.log(longitude, latitude);
});
