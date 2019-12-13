const request = require('request');

const url =
  'https://api.darksky.net/forecast/3b22ee6d97112360bbfc136bdb59240e/33.976,-118.4484';

request({ url: url, json: true }, (error, response) => {
  const data = response.body;
  console.log(
    data.daily.data[0].summary,
    `Currently it is ${data.currently.temperature} degrees out there.  There is a ${data.currently.precipProbability}% chance of rain`
  );
});
