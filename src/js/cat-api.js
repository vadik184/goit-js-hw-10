import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_aCdSCibl4fhdaFnHml3xoLaLNIDQhQsrQk8xXk9MahNLKU3wlymtURi6COfbdydC';

export function fetchBreeds() {
  axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });
}
fetchBreeds();
export function fetchCatByBreed(breedId) {
  axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      return response.data;
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}
fetchCatByBreed();

// const breeds = fetch('https://api.thecatapi.com/v1/breeds')
//   .then(response => {
//     return response.json();
//   })
//   .then(breeds => {
//     console.log(breeds);
//   });

// console.log(breeds);
