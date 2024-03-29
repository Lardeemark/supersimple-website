import {products} from './products.js';

export let cart = [];



export function initializeCart(initializer){

  const initializeFromStorage = initializer;

  if (initializeFromStorage === false){
    cart = [{
      name: 'Prime Ribeye',
      quantity: 5
    },{
      name: 'Choice Tri Tip',
      quantity: 10
    }];
  }else if(initializeFromStorage === true){
    if(JSON.parse(localStorage.getItem('cart')) === null){
      localStorage.setItem('cart', JSON.stringify([]));
      cart = [];
    }
    else{
    cart = JSON.parse(localStorage.getItem('cart'));
    }

  }
  else{console.log('please enter a boolean value');
  }
  console.log('cart: ');
  console.log(cart);
  console.log(cart.length);
}

export function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}


export function getPrice(productName){
  const productN = productName;
  let price = 0;
  products.forEach((value) => {
    if (productN === value.name){
      price= value.price;
    }
  })
  return price;
  };

export function getPicture(productName){
  const productN = productName;
  let picture = 0;
  products.forEach((value) => {
    if (productN === value.name){
      picture= value.img;
    }
  })
  return picture;
  };

export function getCartLength(){
  return cart.length;
}
