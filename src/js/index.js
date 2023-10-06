import { fetchBreeds } from './cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const selector = document.querySelector('.breed-select');
const loader = document.querySelector('.backdrop');
const catInfo = document.querySelector('.cat-info');
