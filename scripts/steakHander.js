import {cart, initializeCart} from './cart.js';

//code for calculating subtotal and restricting quantity input
const inputElement = document.querySelector('.input-cartItem-js');

inputElement.addEventListener('keydown', (value) => {
  if(value.key === 'Enter'){
    const orderQuantity = parseInt(inputElement.value);
    if(0< orderQuantity && orderQuantity < 100){
      document.querySelector('.subtotal-steak1').innerHTML = `Subtotal: ${inputElement.value*40}`;
    }else if(orderQuantity <0){
      document.querySelector('.subtotal-steak1').innerHTML = 'Subtotal: 0'
      inputElement.value = 0;
    }else if(orderQuantity >100){
      inputElement.value = 100;
      document.querySelector('.subtotal-steak1').innerHTML = `Subtotal: ${inputElement.value*40}`;
    }
    console.log('value: ' + value);
    console.log(typeof orderQuantity);
    console.log('order quantity: ' + orderQuantity);
  }
});

const inputElement2 = document.querySelector(`.steak-order-button-js`);

inputElement2.addEventListener('click', () => {
  console.log('click');
  let duplicateChecker = false;
  const inputInt = parseInt(inputElement.value);
  console.log(typeof inputInt);
  if(inputInt >0 && inputInt<100){
  cart.forEach((v, index) => {
    if(v.name === 'Prime Ribeye'){
      v.quantity = inputInt;
      console.log(cart);
      duplicateChecker = true;
   }
    });
  if(duplicateChecker === false){
  cart.push({
    name: 'Prime Ribeye',
    quantity: inputInt
  })
  console.log(cart);
  }
  }
});

