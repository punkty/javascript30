'use strict';

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
// fetch the URL which will return a blob
// The blob could be any kind of data type
// Since we know its json we use the built in method
// We then need another promise and we have the raw data
// we call push onto our array we made and use the ES6 spread to 
// insert each city into its own index in our array
fetch(endpoint).then(blob => blob.json().then(data => cities.push(...data)))

function findMatch(wordToMatch, cities){
    return cities.filter(place=> {

    const regex = new RegExp(wordToMatch,'gi');
    return place.city.match(regex) || place.state.match(regex);
    });
}

function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
}

function displayMatches(){
    const matchArray = findMatch(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population"> ${numberWithCommas(place.population)}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);