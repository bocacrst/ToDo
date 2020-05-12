const headerButton = document.querySelector('.header-button');
const textInput = document.querySelector('.header-text');
const display = document.querySelector('.display');

headerButton.addEventListener('click', ()=>{
    let textValue = textInput.value;

    display.insertAdjacentHTML('beforeend' , 
    `<div class="display-markup slide-right">
        <input class="radio" type="checkbox" >
        <div class="display-text">${textValue}</div>
        <button class="delete-button">X</button>
    </div>`);

   
  
})

display.addEventListener('click', e =>{

    if(e.target.className === "delete-button"){
        console.log('Delete');
        e.target.parentElement.remove();
    }
    else{
       // console.log('not DEL button')
    }

})

 
function createEventListener(){ 
    
    
    if(deleteButton){
        deleteButton.addEventListener('click', ()=>{
            console.log('hello');
            display.removeChild(display.childNodes[0]);
        });
    }else{
        console.log('error');
    }
};
