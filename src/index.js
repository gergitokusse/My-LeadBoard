// eslint-disable-next-line
import _ from 'lodash';
import './style.css';
import { addScore, getmyscore, getGameId } from './modules/loadeandsore.js';

getGameId();
getmyscore();
// event handling
const form = document.querySelector('.form');
const name = document.querySelector('.name');
const score = document.querySelector('.score');
// event for submit form
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (name.value !== null || score.value !== null) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    addScore(data);
    name.value = null;
    score.value = null;
  }
});

// event for refersh button
const refreshbtn = document.querySelector('.refresh');
refreshbtn.addEventListener('click', () => {
  window.location.reload();
});
