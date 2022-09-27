import debounce from 'lodash.debounce';
import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';


const DEBOUNCE_DELAY = 300;

const refs = {
    inputEl: document.querySelector('#search-box'),
    countryListEl: document.querySelector('.country-list'),
    countryInfoElL: document.querySelector('.country-info'),
};

refs.inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));


function onSearch (e) {
    cleanMarkup();
    const nameCountry = e.target.value.trim();


    if(nameCountry === ''){
        cleanMarkup()
        return; 
    }

    fetchCountries(nameCountry)
  .then(countries => {
    finallyMarkup(countries);
  }) 
    Notiflix.Notify.failure("Oops, there is no country with that name")
  

};


function markup() { array.reduce((acc, item))}

const makeMaxMarkup = item => `
<li>
<img src="${item.flags.svg}" width=70px>
<p> ${item.name.official}</p>
<p>Capital: ${item.capital}</p>
<p>Population: ${item.population}</p>
<p>Languages: ${Object.values(item.languages)}</p>
</li>
`;

const makeMinMarkup = item => `
<li>
<img src="${item.flags.svg}" width='70'>
<p> ${item.name.official}</p>
</li>
`;


function makeMarkup(array) {
    if(array.length > 10) {
        Notiflix.Notify.warning(
        "Too many matches found. Please enter a more specific name.")} 

    else if(array.length >= 2 && array.length <= 10){            
        return markup => acc + makeMinMarkup(item), ""}

     else if(array.length === 1) {
        return markup => acc + makeMaxMarkup(item), "" 
    } 
};

function finallyMarkup (array) {
    const result = makeMarkup(array);
    refs.countryListEl.insertAdjacentHTML('beforeend', result);
};




function cleanMarkup(){
    refs.countryListEl.innerHTML = "";
    refs.countryInfoElL.innerHTML = "";
}