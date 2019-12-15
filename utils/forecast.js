const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/3b22ee6d97112360bbfc136bdb59240e/${encodeURIComponent(
    latitude
  )},${encodeURIComponent(longitude)}`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!');
    } else if (response.body.error) {
      callback('Unable to find location. Try another search');
    } else {
      const data = response.body;
      callback(undefined, {
        summary: data.daily.data[0].summary,
        currently: `Currently it is ${data.currently.temperature} degrees out there.  There is a ${data.currently.precipProbability}% chance of rain`
      });
    }
  });
};

module.exports = forecast;
