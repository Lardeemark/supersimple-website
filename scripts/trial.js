/*const a = 100;
const b = 200;

function adder(){
  const a = 10;
  const b = 20;
  innerAdder();
  console.log('adder: ' + (a + b));
 
}

function innerAdder(){
  //const a = 20;
  //const b = 30;

  console.log('innerAdder: ' + (a + b));
}

adder();
*/
let numberArray = JSON.parse(localStorage.getItem('cart3'));
if (numberArray === null){
  numberArray = [];
}

const numberInput = document.querySelector('.number-input');
console.log(numberInput);
numberInput.addEventListener('keydown', (event) =>{
  console.log(event);
});

const submitButton  = document.querySelector('.submit-button');
submitButton.addEventListener('click', () => {
  numberArray.push(numberInput.value);
  localStorage.setItem('cart3', JSON.stringify(numberArray));
});

const retrieveButton = document.querySelector('.retrieve-button');
const displayResults = document.querySelector('.display-results');
retrieveButton.addEventListener('click', () => {
  numberArray = JSON.parse(localStorage.getItem('cart3'));
  displayResults.innerHTML = `Storage Array: ${numberArray}`;
});

const clearStorageButton = document.querySelector('.clear-storage');
clearStorageButton.addEventListener('click', () =>{
  localStorage.setItem('cart3', JSON.stringify([]));
  numberArray = JSON.parse(localStorage.getItem('cart3'));
  displayResults.innerHTML = `Storage Array: ${numberArray}`;
  console.log(numberArray);
})