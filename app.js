const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log('Please provide a location');
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) return console.log('Error', error);

    forecast(latitude, longitude, (error, { currently }) => {
      if (error) return console.log('Error', error);

      console.log(location);
      console.log(currently);
    });
  });
}
