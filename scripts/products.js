export const products = [{
    name: 'Prime Ribeye',
    price: 4000,
    img: '../Graphics/SteakImages/RibeyeSteakPrime.jpg',
    tags: ['prime', 'rib', 'ribeye', 'steak']
    },{name: 'Choice Ribeye',
    price: 3500,
    img: '../Graphics/SteakImages/RibeyeSteakChoice.jpg',
    tags: ['choice', 'rib', 'ribeye', 'steak']
    },{
    name: 'Prime New York Strip',
    price: 3500,
    img: '../Graphics/SteakImages/NewYorkStripPrime.jpg',
    tags: ['prime', 'new', 'newyork', 'york', 'yorkstrip', 'newyorkstrip', 'strip', 'steak']
    },{
    name: 'Choice New York Strip',
    price: 3500,
    img: '../Graphics/SteakImages/NewYorkStripChoice.jpg',
    tags: ['choice', 'new', 'newyork', 'york', 'yorkstrip', 'newyorkstrip', 'strip', 'steak']
    },{
    name: 'Prime Tri Tip',
    price: 3000,
    img: '../Graphics/SteakImages/Tri-tipPrime.jpg',
    tags: ['prime', 'tri', 'tip', 'tritip', 'steak']
    },{
    name: 'Choice Tri Tip',
    price: 2500,
    img: '../Graphics/SteakImages/Tri-tipChoice.jpg',
    tags: ['choice', 'tri', 'tip', 'tritip', 'steak']
    }
  ]

export let  productNameArray = [];

export function productArrayInitializer(){
    products.forEach((value,index)=>{
      productNameArray.push(value.name);
    });
  }
