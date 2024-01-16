import {cart,initializeCart, getPrice, saveToStorage, getPicture} from './cart.js';

//initializeCart();
initializeCart(true);
cartCheckoutSummary();

function cartCheckoutSummary(){

  //checkout individual items

  let subtotal = 0;
  const productDiv = document.querySelector(`.cart-list-grid`);
  productDiv.innerHTML = '';
  cart.forEach((value, index) => {

    const picture = getPicture(value.name);
    const price2 = getPrice(value.name);
    productDiv.innerHTML += 
    `<div class="product product-${index}-js">
    <div class="product-checkout-info">
    <p>Product: ${value.name}</p>
    <p>Quantity: ${value.quantity}</p>
    <p>Price: $${Math.round(price2/100).toFixed(2)}</p>
    <p>Subtotal: $${Math.round(price2*value.quantity/100).toFixed(2)}</p></div>

    <img class="steak-image" src="${picture}">

    <div class="delete-button-box">
    <button class="delete-button delete-button-${index}-js">Remove ${value.name} From Cart</button>
    </div>
    </div>
    `
    subtotal += price2*value.quantity;

  
  });


  //checkout total: 

    const finalSubtotal = Math.round(subtotal/100).toFixed(2);
    const finalTax = Math.round((subtotal/100)*.04).toFixed(2);
    const finalTotal = Number(finalTax) + Number(finalSubtotal);
  const totalDiv = document.querySelector('.checkout-total');
  totalDiv.innerHTML = 
  `<div style="flex:1;">
  <p> Subtotal: $${finalSubtotal}</p>
   <p> Tax (4%): $${finalTax}</p>
   <p style="font-weight: bold; font-size: 15px;"> Total: $${finalTotal.toFixed(2)}</p>
   </div>
   <div style="flex:1;" class="empty-space">
   </div>

   <div class="order-button-box"><button class="order-button order-button-js">
    Order
   </div>
  `

  deleteButtonInitializer();
};

function deleteButtonInitializer(){
  cart.forEach((value2, index2) =>{
    console.log(typeof value2.name);
    const buttonListener = document.querySelector(`.delete-button-${index2}-js`);
    console.log(buttonListener);
    buttonListener.addEventListener('click', () =>{
      cart.splice(index2,1);
      saveToStorage();
      cartCheckoutSummary();
    });
  });
}