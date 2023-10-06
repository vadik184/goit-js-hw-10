import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_aCdSCibl4fhdaFnHml3xoLaLNIDQhQsrQk8xXk9MahNLKU3wlymtURi6COfbdydC';

function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(resp => {
      return resp.data;
    })
    .catch(error => {
      throw new Error(error.status);
    });
}

module.exports = {
  fetchBreeds,
  fetchCatByBreed,
};
