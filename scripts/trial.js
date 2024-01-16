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

const numberInput = document.querySelector('.number-input');
console.log(numberInput);
numberInput.addEventListener('keydown', (event) =>{
  console.log(event);
});