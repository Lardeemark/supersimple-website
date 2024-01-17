import { products } from './products.js';
import { populateSteakCollection } from './steakHander.js';

const buttonSearchListener = document.querySelector('.search-button-js');
const inputSearchListener = document.querySelector('.search-bar-input-js');

let steakSearchArray = [];

export function initializeListeners(){
  buttonSearchListener.addEventListener('click', ()=>{
    console.log('click');
    const steakSearch = inputSearchListener.value.toLowerCase();
    steakSearcher(steakSearch);
    populateSteakCollection(steakSearchArray);
  })

  inputSearchListener.addEventListener('keydown', (event)=>{
    console.log(event);
    if(event.key === 'Enter'){
      const steakSearch = inputSearchListener.value.toLowerCase();
      steakSearcher(steakSearch);
      populateSteakCollection(steakSearchArray);
    }
  })

}


function steakSearcher(steakSearch){
  products.forEach((value,index) => {
    
    for(let i = 0; i<value.tags.length; i++){
      if(steakSearch.includes(value.tags[i])){
        steakSearchArray[index] = value.name;
        break;
      }
      steakSearchArray[index] = 'none';
    }
    
  })
}