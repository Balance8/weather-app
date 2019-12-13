const request = require('request');

const url =
  'https://api.darksky.net/forecast/3b22ee6d97112360bbfc136bdb59240e/37.8267,-122.4233';

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
});
