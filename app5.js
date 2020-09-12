const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

/*form.addEventListener('submit',function(e){
    alert('submitted the form');
    console.log('cc',creditCardInput.value);
    console.log('terms',termsCheckbox.value);
    console.log('veggieSelect',veggieSelect.value);
    e.preventDefault();
});


const FormData ={};
creditCardInput.addEventListener('input',(e)=> {
    console.log('CC CHANGED!',e);
    FormData['cc'] = e.target.value;
});

veggieSelect.addEventListener('input',(e)=>{
    console.log('VEGGIE',e);
    FormData['veggie'] = e.target.value;
});

termsCheckbox.addEventListener('input',(e) =>{
    console.log('CHECKBOX',e);
    FormData['agreeToTerms'] = e.target.checked;
});
*/
//another way

/*const formData = {};
for(let input of [creditCardInput,termsCheckbox,veggieSelect])
{
    input.addEventListener('input', (e) => {
        formData[e.target.name] = e.target.value;
    });
}
*/

//one more way
const formData = {};
for(let input of [creditCardInput,termsCheckbox,veggieSelect])
{
    input.addEventListener('input', ({target}) => {
        const {name,type,value,checked} = target;
        formData[name] = type ==='checkbox'? checked : value;
        console.log(formData);
    });
}