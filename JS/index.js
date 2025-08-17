console.log('veikia...');

const textDOM = document.querySelector('h1');

textDOM.textContent = 'Skaiciaus didinimas/mazinimas su mygtuku';

const buttonDOM = document.querySelectorAll('button');
const [minusDOM, plusDOM] = buttonDOM

const countDOM = document.querySelector('p');

let counter = 0;

minusDOM.addEventListener('click', () => {
    --counter;
    countDOM.textContent = counter;
});


plusDOM.addEventListener('click', () => {
    ++counter;
    countDOM.textContent = counter;
});

// lempute ijungimas su mygtuku

const turnOnDOM = document.querySelector('.lempute button');
const lemputeDOM = document.querySelector('.lempute div');


let clickCounter = 0;

turnOnDOM.addEventListener('click', () => {
    ++clickCounter;
    if(clickCounter % 2 === 0){
        console.log(clickCounter)
        console.log('geltona...');
        lemputeDOM.classList.add('yellow');
        turnOnDOM.textContent= 'OFF';
    }else {
        lemputeDOM.classList.remove('yellow');
        turnOnDOM.textContent= 'ON';
    }

})
