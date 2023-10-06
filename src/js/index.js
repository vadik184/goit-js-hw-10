import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const selector = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
const errorText = document.querySelector('.error');

function getPetsList(breeds) {
  selector.innerHTML = breeds
    .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
    .join('\n');
}
fetchBreeds()
  .then(result => {
    getPetsList(result);
    loader.classList.toggle('is-hidden');
    errorText.classList.toggle('is-hidden');
  })
  .then(() => new SlimSelect({ select: '.breed-select' }))
  .catch(() => {
    Notiflix.Notify.failure(
      `Oops! Something went wrong! Try reloading the page!`,
      { timeout: 4000, useIcon: false }
    );
  });

//const showInfo = info => {

//};
selector.addEventListener('change', onSelect);
function onSelect(evt) {
  catInfo.classList.add('is-hidden');
  selector.classList.add('is-hidden');
  errorText.classList.add('is-hidden');

  const selectBreedId = evt.currentTarget.value;

  fetchCatByBreed(selectBreedId)
    .then(data => {
      markup(data);
      loader.classList.add('is-hidden');
      catInfo.classList.remove('is-hidden');
    })
    .catch(() => {
      Notiflix.Notify.failure(
        `Oops! Something went wrong! Try reloading the page!`,
        { timeout: 4000, useIcon: false }
      );
    });
}

//===== creteMarkup
function markup(data) {
  const { breeds, url } = data[0];
  const { name, temperament, description } = breeds[0];
  const catCard = `
   <img src="${url}" alt="${name}" width=500>
    <div>
  <h2 class="title">${name}</h2>
  <p class="text">${description}</p>
  <p class="text span-text"><span class="span">Temperament:</span> ${temperament}</p>
</div>`;
  catInfo.innerHTML = catCard;
}
