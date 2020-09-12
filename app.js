//alert("its working");
/*console.log(3+7);
console.log(3+6,'hello',true);

if(1 ===1)
{
    console.log("its true");
}

if(1 !== 1)
{
    console.log("its 2 true");
}

let rating = 2;
if(rating === 2)
{
    console.log('its again true');
}

let num = 37;

if(num % 2 !== 0)
{
    console.log("number is odd");
}

let num1 = 10;
if(num1 ===2)
{
console.log("hii i m here")
}

else if(num1 ===3)
{
    console.log("i m here too");

}
else if(num1 === 1)
{
    console.log("true")
}
else
{
console.log("now this one is true");
}

let initial = 300;
let final = 500;
if(initial>final){
{
console.log("hii how r u")
initial = final;
}

}
else
{
    console.log("wrong choice")
}

let password = 'kitty';

if (password.length > 6)
{
if(password.indexof(' ') === -1)
{
    console.log('valid password');
}


else
{
console.log("password is long enough")
}
}
else{
    console.log('write a right password');
}

let mystery = 0;

if(mystery) 
{
    console.log('TRUTHY');
}
else
{
    console.log('FALSY')
}

let isLoggedin = ' Anurag ';

if(isLoggedin)
{
    console.log('isLoggedin');
}
else
{
    console.log('isLoggedin again');
}

let num2 = 11;

if(num2>=1 && num2<=10)
{
    console.log('num is between 1 and 10');
}
else
{
console.log("num exceed limit")
}

let age =18;

if(age>=18 || age>=50)
{
    console.log('right number');
}
else
{
 console.log('wrong number');
}

let colour = 'blue'

if(colour === 'blue' || colour ==='violet'|| colour ==='purple')
{
    console.log("my aura");
}

let isLoggedinUser;

if(!isLoggedinUser)
{
    console.log('true')
};

let flavour = 'watermelon';

if(flavour !== 'lichi' && !flavour !=='orange')
{
    console.log("lets take watermelon");
}


let y =7;
y === 3 || y===7 && y >10

//() ! && ||

//if,elseif replacement...switch case default
let day = 7;

switch(day) {
    case 1: 
    console.log('Monday');
    break;

    case 2:
    console.log("tuesday");
    break;

    case 3:
     console.log("wednesday");
     break;
     
    case 4:
      console.log("thursday");
      break;
      
    case 5:
        console.log("friday");
        break;

    case 6:
        console.log("saturday");
        break;

     case 7:
         console.log("sunday");
         break;
    
    default:
        console.log('invalid day');
}

//if else
num === 7 ? console.log('lucky') : console.log("more lucky");

*/

//array

/*
let shoppinglist = ['laptop','ram','screen'];
let anynum = [1,2,NaN,true,null,'dog'];

let colour = ['red','yellow'];

let shoppingList2 = ['cheese','2 milk'];

let myapp = [0,1,2,3,4,5];

myapp[0] = 1;

myapp[myapp.length] = 100;

let topSong = [
    'feel me',
    'tum se he',
    'loose you to love me',
    'sab tera'

];

topSong.push('if you are mot');

let str = "hello";

topSong.pop('if you are not');


let dishes = ['largrplate']
dishes.unshift('boilerplate')
dishes.unshift('spoon')

dishes.shift()

let food = ['italian']
food.unshift('noodle','pizza');
food.unshift('desert');
food.unshift('icecream');

food.push('north','east');  

let fruit = ['apple','banana'];
let veggies = ['sprout,brussel'];

console.log(fruit.concat(veggies));
console.log(veggies.concat(fruit));

let veg = ['ladyfinger','cualiflower'];

let allfood = veggies.concat(veg,fruit);

let ingredient = [
    'water',
    'fat',
    'cheese',
    'sugar',
    'butter'

];

ingredient.includes('water');
ingredient.includes('water',0)

if(ingredient.includes('cheese')) {

    console.log(' i like it');
}

ingredient.indexOf('butter');
ingredient.indexOf('curd');

ingredient.indexOf('curd') !== -1

let letter = ['A','N','U','R','A','G'];

letter.reverse()

letter.join();

letter.join('-');

letter.join('&');

//day 4

let animal = ['dog','rabbit','monkey'];

 animal.slice(2,0);
 animal.slice(0);

 animal.slice(-2);

 //deleting 
 animal.slice(1,0,'octopus');

 //sorting

 let num = [0,1,3,3,5,4];

 num.sort();

 

 //declaration and defination by reference

 let fruit1 = 'orange';
 let colours1 = fruit1;
 let fruit3 = fruit1;

 let fruit4 = 'mango';

 //array tricks

 let num1 = [0,1,2,3,4,5,6];
 othernum = num1;

 //both num1 and othernum store in same refernce in memory..

 num1.pop()
 othernum

 //const and array
 const city = 'london';
 //city = 'newyork';
 const egg = ['white','brown'];

 egg[0] = 'green';
 egg.push('yellow');
 egg.pop();

 //nested array
 const animal2 = [
     ['dog','monkey',['fish','crap']],
     ['lion','tiger'],
     ['elephant','deer']
 ];

 animal2[2];
 animal[2][0];

 animal2[2][0] = 'fish';


//objects
//large data of object is store in array.
const fitness = {
    Totalsteps : 50000,
    TotalMiles : 211,
    AvgCaloryBurn: 5755,
    workout: 7
};

const fitness2 = {
    Totalsteps : 50000,
    TotalMiles : 211,
    AvgCaloryBurn: 5755,
    workout: 7,
    45: 'anurag'
};

const fitness3 = {
    Totalsteps : 50000,
    TotalMiles : 211,
    AvgCaloryBurn: 5755,
    workout: 7,
    name: 'anurag'
};

const number = {
    100 : 'hundred',
    50 : 'fifty'

}

const number2 = {
    '100' : 'hundred',
    '50' : 'fifty'

}

const colour5 = {
    blue : 'uednxuc',
    green : 'icj[ecl',
    yellow : 'orfoiref'
}

 colour5["ye"+"ll"+"ow"]

 //more on that

 const userReview = {};

 userReview['hii'] = 4.0;

 userReview.kuku = 'name';

 //userReview['hii'] = 4.0++;

 //nested object with array

 const students = {
     firstname : 'Anurag',
     lastname : 'bajpai',
     strength : ['music','Art'],
     exam:
     {
     midterm:4,
     final:5
     }
    }
students.exam.midterm
students.strength[0]

const Avg = (students.exam.midterm+students.exam.final)/2


//object declaration in array 
const shoppingCart = [
    {
        product:'rice',
        price:20,
        quantity:2
    },

    {
        product:'rice',
        price:20,
        quantity:2
    },

    {
        product:'rice',
        price:20,
        quantity:2
    },

]
 
// array equality

let nums = [1,2,3];
let mystery = [1,2,3];

num === mystery
num == mystery
//here it will compare refernce of both ..not a number.
num = 7869797979
mystery = 777778665

let num5 = nums;
//both point to same address

//loop

for(i=0;i<=10;i++){

    console.log("hello",i*4);
}

for(i=50;i>=0;i--)
{
    console.log(i);
}

//loop in array
const examscore = [0,9,8,7,6,5,4,3,2,1]

for(let i=0;examscore.length>i;i++){
    
    console.log(i,examscore[i]);
}

//array and objects
//easier to add object in array
const mystudents = [
    {
        fName : 'Anurag',
        grade: 'A+'
    },

    {
        fName : 'jesus',
        grade: 'A+'
    },

    {
        fName : 'mathew',
        grade: 'A+'
    },

];

for(let i=0;mystudents.length>i;i++)
{
    console.log(mystudents[i].fName);
    console.log(mystudents[i].grade);
}

//Another method

for(let i = 0; mystudents.length>i;i++)
{
let student = mystudents[i];
console.log(`${student.fName}` )
console.log(`${student.grade}`)
}
//q= how to get only 1st name Anurag..all name r printing

//reversing the string
const word = 'Anurag';
for(let i = word.length -1;i>=0;i--)
{
console.log(i);
console.log(word[i]);
}

//summition

for(let i = 0; mystudents.length>i;i++)
{
    let total = 0;
let student = mystudents[i];
console.log(`${student.fName}` )
console.log(`${student.grade}`)
 total = total+student.grade;
}

//loop
for(let i = 0 ;i<=20;i++)
{
    console.log("outer loop",i);

    for(let j=10;j>=0;j=j-2)
    {
        console.log('inner loop', j);
    }

}

//gameboard
const gameboard = [
   [4,32,8,4],
   [64,8,32,2],
   [8,32,16,4],
   [2,8,4,2] 
];
totals = 0;
for(let i = 0;gameboard.length>i ;i++)
{
    const row = gameboard[i];
    console.log(row);
    totals = totals+row[i];

}

//while loop
for(i=0;i<=10;i++)
{
    console.log(i);
}

let j=0;
while(j<=10)
{
    j++;
    console.log(j);
}

//const target = Math.floor(Math.random() * 10);

//break keyword
for(let i=0;i<=10;i++)
{
    console.log(i);
    if(i===5)
    {
        break;
    }
  
  
}

//latest style for loop

const game = ['cricket','basketball','vollyball','chess','swimming'];

//old way
for(i=0;game.length>i;i++)
{
    console.log(game[i]);
}

//New way
for(let sub of game)
{
console.log(sub);
}

for(let char of 'hello world')
{
    console.log(char.toUpperCase());
}

//array addition using for..of loop
*/

/*const MagicNumber = 
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for(i=0;MagicNumber.length>1;i++)
{
    console.log(MagicNumber[i]);
}*/
//console.log("hello world");