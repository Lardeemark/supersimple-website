import {cart, initializeCart, saveToStorage, getCartLength} from './cart.js';
import {products} from './products.js';

//code for calculating subtotal and restricting quantity input
initializeCart(true);
populateSteakCollection();
document.querySelector('.cart-quantity-js').innerHTML = getCartLength();

function populateSteakCollection(){
  const inputElement = document.querySelector('.steak-collection-container');
  inputElement.innerHTML = '';

  products.forEach((value, index) => {
    inputElement.innerHTML += `
    <div class="steak-collection steak-collection-${index}">
      <div class="steak-image steak-image-${index}">
        <img src=${value.img}
        style="width: 100%;
        height: 100%;
        display: inline-block;
        object-fit: cover;
        object-position: 0% 90%;" >
      </div>
      <div class="steak-information">
        <div class="steak-information-text">
          <p>USDA ${value.name}
          </p>
          <p>Price: $${Math.round(value.price/100).toFixed(2)} per pound
          </p>
        </div>
        <div class="steak-order">
          <div style="display:flex; align-items: center; justify-content:space-between;">
            <input type="number" placeholder="Enter quantity by lbs" class="input-cartItem input-cartItem-${index}-js"
            min="0" max="100" > lbs
          </div>
          <p style="margin: 0;" class="subtotal-steak1 subtotal-steak-${index}-js ">Subtotal: </p>
          <button class="steak-order-button steak-order-button-${index}-js">Add to Cart</button>
        </div>
      </div>
    </div>
    `;

  
  
    simpleInputDetector(value,index);
  });

  products.forEach((value,index)=>{
    const inputElement2 = addInputListener(value,index);
    addToCartButtonListener(value,index, inputElement2);
  })
  
}


function simpleInputDetector(value, index){
  const numberInput = document.querySelector(`.input-cartItem-${index}-js`);
  console.log(numberInput);
  numberInput.addEventListener('keydown', (keyValue) =>{
    console.log(keyValue);
  });
  console.log('event listener added');
}


function addInputListener(value, index){
  
  const inputElement2 = document.querySelector(`.input-cartItem-${index}-js`);

  inputElement2.addEventListener('keydown', (keyValue) => {
    console.log(keyValue);
    if(keyValue.key === 'Enter'){
      const orderQuantity = parseInt(inputElement2.value);
      if(0< orderQuantity && orderQuantity < 100){
        document.querySelector(`.subtotal-steak-${index}-js`).innerHTML = `Subtotal: $${(inputElement2.value*value.price/100).toFixed(2)}`;
      }else if(orderQuantity <0){
        document.querySelector(`.subtotal-steak-${index}-js`).innerHTML = 'Subtotal: 0'
        inputElement2.value = 0;
      }else if(orderQuantity >100){
        inputElement2.value = 100;
        document.querySelector(`.subtotal-steak-${index}-js`).innerHTML = `Subtotal: $${(100*(value.price/100)).toFixed(2)}`;
      }
      console.log('value: ' + value);
      console.log(typeof orderQuantity);
      console.log('order quantity: ' + orderQuantity);
    }
  });
  return inputElement2;
}

function addToCartButtonListener(value,index, inputElement2){

  
  const inputElement3 = document.querySelector(`.steak-order-button-${index}-js`);
  console.log('inputElement 3: ');
  console.log(inputElement3);
  inputElement3.addEventListener('click', () => {
    console.log('click');
    console.log(inputElement2);
    let duplicateChecker = false;
    const inputInt = parseInt(inputElement2.value);
    if(inputInt >0 && inputInt<100){
      cart.forEach((v, index) => {
        if(v.name === value.name){
          v.quantity = inputInt;
          duplicateChecker = true;
      }
      });
      if(duplicateChecker === false){
        cart.push({
          name: value.name,
          quantity: inputInt
        })
      }
    }
    saveToStorage();
    initializeCart(true);
    document.querySelector('.cart-quantity-js').innerHTML = getCartLength();
  });
}

