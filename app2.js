/*const colours = 
[
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'indigo',
    'violet'
];

//const h1 = document.querySelector('#print');
const printColor = function()
{   const h1 = document.querySelector('h1');
   // console.log(box.style.backgroundColor);
    h1.style.color = this.style.backgroundColor;
};

const container = document.querySelector('#boxes')
for(let color of colours)
{
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click',printColor)
}  
        //box.addEventListener('click',printColor);
       // console.log(box.style.backgroundColor);
       //printColor(box);
    
  
   // box.addEventListener('click',printColor);
  // box.addEventListener('click',printColor);
//}
 

/*document.body.addEventListener('keypress',function(e){
console.log(e);
})*/

/*const input = document.querySelector('#username');
input.addEventListener('keydown',function(e)
{
  console.log("Key Down");  
})

input.addEventListener('key up',function(e)
{
  console.log("Key up");  
})*/

const addItemInput = document.querySelector('#addItem');
const itemUL = document.querySelector('#items');

addItemInput.addEventListener('keypress',function(e)
{
    if(e.key === 'Enter')
    {
       // console.log(this.value);
        const newItemText = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newItemText;
        itemUL.appendChild(newItem);
        this.value = '';
    }
});





