import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_aCdSCibl4fhdaFnHml3xoLaLNIDQhQsrQk8xXk9MahNLKU3wlymtURi6COfbdydC';

function fetchBreeds() {
  axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
