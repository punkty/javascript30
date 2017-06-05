'use strict'

const dogs = [{"name": 'Odi', "age": 1}, {"name": 'Spike', "age": 4}]
const p = document.querySelector('p');
p.addEventListener('click', function(){
    p.style.color = 'green';
    p.style.fontSize = '50px'
})


let snail = '🐺'
//Regular
console.log('hello world');

// Interpolated
console.log(`Hello I am a %c${snail}`, 'font-size: 30px;')

// Styled
// anything after the %c will be styled
console.log('this will not be styled' +'%c this will be','font-size: 50px; background: red')

// Warning!
console.warn('WARNING WARNING WARNING')

// Error
console.error('THIS IS AN ERROR THAT WILL RUIN EVERYTHING');

// Info
console.info({'info': 'Movie trailers were originally shown after the movie, which is why they were called trailers.'});

// Testing
console.assert( 1 === 2, 'Equation is incorrect')

// clearing
// console.clear()

// Viewing DOM Elements
// Shows element
console.log(p);
// Shows entire directory for that element cracked open
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`)
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`)
})

// Counting
console.count("Ty")
console.count("Ty")
console.count("Ty")
console.count("Ty")
console.count("Ty")

// Timing
console.time('fetching data');
fetch('http://api.github.com/users/punkty')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    })

// Table
console.table(dogs)