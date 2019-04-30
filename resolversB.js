const axios = require('axios');

module.exports = {
  launches: () => {
    return axios
      .get('https://api.spacexdata.com/v3/launches')
      .then(res => res.data);
  },
  launch: args => {
    return axios
      .get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
      .then(res => res.data);
  },
  rockets: () => {
    return axios
      .get('https://api.spacexdata.com/v3/rockets')
      .then(res => res.data);
  },
  rocket: args => {
    return axios
      .get(`https://api.spacexdata.com/v3/rockets/${args.flight_number}`)
      .then(res => res.data);
  }
};
