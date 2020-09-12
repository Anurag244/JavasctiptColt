//alert('i m here too');
/*const MagicNumber = 
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(i=0;MagicNumber.length>i;i++)
{
    let row = MagicNumber[i];
    //console.log(MagicNumber[i]);
    let sum = 0;
    for(let j = 0;j< row.length;j++){
        sum = sum+row[j];
    }
    console.log(sum);
    console.log(row);
    
    
    
}*/

/*for(let chars of MagicNumber)
{  let num;
    let sum = 0;
for(let num of chars)
{
  
     sum = sum + num;
    
}
console.log(sum);
console.log(chars);
}*/

/*const word1 = ['lion','tiger','elephant','monkey'];
const word2 = ['harry','jessica','mathew','paul'];

for(let i = 0;word1.length>i;i++)
{
    console.log(word1[i]);
    console.log(word2[i]);

        
}*/

const Name = {
    harry : 10,
    jessica:10,
    mathew:10,
    paul:8
}
//let i = 0;
//console.log(Name[i]);
/*console.log(Object.keys(Name));

//for name

for(let celebrity of Object.keys(Name))
{
    console.log(celebrity);
   // console.log(Object.values(celebrity));
}

//for value

for(let number of Object.values(Name))
{
    console.log(number);
   // console.log(Object.values(celebrity));
   
}

let rating = Object.values(Name);
for(let r of rating)
{   total = 0;
    total = total+r;
    let Avg = total/rating.length;
    console.log(Avg);
}
*/

/*for(let num in Name){
    console.log(num);
    console.log(Name[num]);

}

let total = 0;
for(let num in Name){
    //console.log(num);
    total = total + Name[num];
    console.log(total);

}*/

/*function drum(anurag)
 {
console.log("hii i m here");
console.log("i m still here");
console.log("i will be still here");



 }*/



 /*for(let i = 0; i <=10; i++)
 {

     drum();
 }*/


/*function drums(anurag)
{
    console.log(anurag);
    console.log('hi');
}
*/

/*
function drumses(a,b,c)
{
    console.log(a,b,c);
   // console.log(a);
}

function square(num)
{
    console.log(num*num);
}

function sum(x,y)
{
    console.log(x+y);
}

//order matters

function divide(x,y)
{
console.log(x/y);
}

function add(x,y)
{
    return x+y;
}

function squares(x)
{
    return x * x;
    
}*/

/*function ispurple(colour) {
    if(colour.toLowerCase() === 'white')
    {
        return true;
    }
    else 
    {
        return false;
    }
*/

/*function ispurple(color) {
    return color.toLowerCase() === 'purple';
*/


/*function ContainPurple(arr)
{
    for(let colours of arr)
    {
        if(colours === 'purple' || colours === 'Magenta')
        {
            return true;
        }
    }
    return false;
}
*/

/*function isValidPassword(password,username)
{
if(password.length <8)
{
    return false;
}
if(password.indexOf(' ') !== -1)
{
    return false;
}
if(password.indexOf(username) !== -1)
{
    return false;
}
    return true;
*/

/*function isValidPassword(password,username)
{
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !==-1;
    const tooSimilar = password.indexOf(username) !== -1;

    //if(tooShort || hasSpace || tooSimilar) return false;
    if(!tooShort && !hasSpace && !tooSimilar)
    return true;

    return false;
}
*/

/*function average(arr)
{   
     let total = 0;

   // let arr5 = [1,2,3,4,5];
    for(let num of arr)
    { 
        total = total+num;
    

    }
    let avg = total/arr.length ;
    return avg;
    //console.log(avg);
}*/

/*function isPangram(sentence)
{
    for(let char of 'abcdefgh') {
        if(sentence.indexOf(char) === -1) {
            return false;
        }
    }
return true;
}*/

/*function isPangram(sentence) {
    let lowerCase = sentence.toLowerCase();
    for(let char of 'abcdefgh')
    {
        if(!lowerCase.(char))
        {
            return false;
        }
    }
    return true;
}
*/

/*function getCard() 
{
   const values = [1,2,3,4,5,6,7,8,9,0];


const ValIdx = Math.floor(Math.random() * values.length);
const value = values[ValIdx];

const suits = ['club','hearts','spades','diamonds'];
const suitIdx = Math.floor(Math.random() * suits.length);
const suit = suits[suitIdx];
return {value: value,suit: suit};
}
*/

//function scope


/*function lol()
{
    let person = 'Tom',
    const age = 45;
    console.log(age);
}

function changeColour()
{
   let age = 19;
   let colour = 'purple' 
}
lol();
changeColour();
*/


/*let bird = 'duck';

function birdWatch()
{
    let bird = 'golden bird';
    console.log(bird);
}
birdWatch();
console.log(bird);*/


/*if(true)
{
    //let animal = 'dog';
    //const animal = 'dog';
    var animal = 'dog';
    console.log(animal);
}
console.log(animal);
*/

/*let animal = ['dog','monkey','rabbit'];
for(var i=0;i<animal.length;i++)
{
    console.log(i,animal[i]);
}
console.log(i);
*/

/*function doubleArr(arr)
{
   const result = [];
   for(let num of arr)
   {
       var double = num * 2;
       result.push(double);
   }
   console.log(double);
   return result;
}*/

/*function outer() {
    let movie = 'Avenger';

    function inner() {
        console.log(movie.toUpperCase())
    }
    //movie define in outer scope, but cannot access nested inner scope.
    inner();
}
*/
/*function outer() {
    let movie = 'Avenger';

    function inner() {
        let movie = 'The Shinning';
        console.log(movie.toUpperCase())
    }
    //movie define in outer scope, but cannot access nested inner scope.
    inner();
}*/

/*function outer() {
    let movie = 'Avenger';

    function inner() {
        //scope work of der nested parent function
       // let movie = 'The Shinning';
        //console.log(movie.toUpperCase())
        function extrainner() {
            console.log(movie.toUpperCase());
        }
        extrainner();
    }
    //movie define in outer scope, but cannot access nested inner scope.
    inner();
}*/

/*function add(x,y)
{
    return x+y;
}

const sum = function(x,y)
{
    return x+y;
}

//EVERY FUNCTION IS OBJECT IN JAVASCRIPT.THATS Y WE CAN STORE IN VARIABLE

const product = function multiply(x,y)
{
    return x*y;
}

//product(4,5)
//20
//multiply(4,5)
//VM2819:1 Uncaught ReferenceError: multiply is not defined
    //at <anonymous>:1:1
    */

/*function add(x,y)
{
    return x+y;
}

function Subtract(x,y)
{
    return x - y;
}

function Multiply(x,y)
{
    return x*y;
}

function Divide(x,y)
{
    return x/y;
}

/*const operations = [add,Subtract,Multiply,Divide];

for(let func of operations)
{
     let result = func(30,5);
     console.log(result);
}*/
//store in object
/*
const thing = {
doSomething: Multiply
}
*/

/*function CallThreeTimes(funct)
{
    funct();
    funct();
    funct();
}

function cry() 
{
    console.log('Today i m Sad');
}

function Happy()
{
    console.log('Today i m Happy')
}

function repeatNTimes(action,Num)
{
for(let i = 0;i< Num;i++)
{
    action();
}
}

function PickOne(f1,f2) 
{
    let rand = Math.random();
    console.log(rand);

    if(rand < 0.5)
    {
        f1();
    }
    else{
        f2();
    }
}

function MultiplyBy(num)
{
    return function() {
        console.log('hii');
    }
}

function Multiplyby(num)
{
    return function(x) {
        return x * num;
    }
}

const triple = Multiplyby(3);

function makeBetweenFunc(x,y)
{
    return function(num)
    {
        return num >= x && num <=y;
    }
}

//one function 3 different result
const isChild = makeBetweenFunc(0,18);
const isInNineties = makeBetweenFunc(1990,1999);
const isNiceWeather = makeBetweenFunc(60,79);
*/

/*function grumpus()
{
    alert("Go Away");
}*/

/*setTimeout(grumpus,5000)

setTimeout(function() {
    alert("hello world");
},5000);
*/
/*const btn = document.querySelector('button');
btn.addEventListener('click', function()
{
    alert("Hello World");
});
*/

/*console.log(animal);
var animal = 'monkey';
//var work 1st
console.log(animal);
*/

/*console.log(animal);
1st console.log work 1st;
const animal = 'monkey';
console.log(animal);*/

/*function decorationWork()
{
    console.log("hii");
}
decorationWork();
*/

//expression does not work...because its not a function.
/*Expression();
const Expression = function decorationWork()
{
    console.log("hii");
}
*/

//forEach()

//const numbers = [21,22,23,24,25,26];

/*numbers.forEach(function(num)
{
    console.log(num);
})
*/

//anuther way
 /*function printTriple(Num)
{
    console.log(Num*3);
}

 numbers.forEach(printTriple);
 printTriple(20);
*/

/*const books = [
{
    Title:'good one',
    Author: ['Tom and Jerry'],
    Rating: 4
},
{
    Title:'look one',
    Author: ['Tomy and jaaz'],
    Rating: 5
},
{
    Title:'Ask one',
    Author: ['Tommy hilfiger and jasmine'],
    Rating: 6
},
{
    Title:'Many one',
    Author: ['Tommy hilfiger New and jasmine'],
    Rating: 6
}]

books.forEach(function(book,index)
{
    console.log(index,book.Title.toUpperCase())
})
*/

/*for(let book of books)
{
    console.log(book.Title.toUpperCase());
}
*/

/*for(let i = 0; i< books.length;i++)

{
    console.log(books[i].Title.toUpperCase())
}
*/



/*const numbers = [20,21,22,23,24,25];
const words = ['whatssapp','ruby','instagram','facebook'];

const books = [
    {
        Title:'good one',
        Author: ['Tom and Jerry'],
        Rating: 4
    },
    {
        Title:'look one',
        Author: ['Tomy and jaaz'],
        Rating: 5
    },
    {
        Title:'Ask one',
        Author: ['Tommy hilfiger and jasmine'],
        Rating: 6
    },
    {
        Title:'Many one',
        Author: ['Tommy hilfiger New and jasmine'],
        Rating: 6
    }]

const doubles = numbers.map(function(num)
{
    return num*2;
});

const numDetail = numbers.map(function(n)
//map call a function and form a new array
{
    return {
        value: n,
        isEven: n%2 === 0
    }
})

const doubles2 = [];
for(let num of numbers)
{
    doubles2.push(num*2)
}

const abp = words.map(function(word){
    return word.toUpperCase().split('').join('.');
});

const BookData = books.map(function(n){
    return n.Title;
})
*/

/*const square = function (x) 
{
    return x*x;
}
//Arrow function is alternative of function expression
const squares = (x) =>
{
    return x*x;
}

//paranthesis at x is not needed
const squares1 = x =>
{
    return x*x;
}

const isEven = (num) => {
    return num % 2 ===0;
}

const multiply = (x,y) =>{
    return x * y;
}

//nothing inside parenthesis
const greet = () => {
    console.log('Hii');
}

//return is not needed..do not use carle bracket
const square2 = n =>
(
    n * n
)
//even bracket is not needed
const square3 = n => n * n;
*/

/*const nums = [1,2,3,4,5,6,7,8];

const double1 = nums.map(function(n){
    return n*2;
})

const double2 = nums.map(n =>{
    return n * 2;
})

const double3 = nums.map(n => n*2);

const ParityList = nums.map(function(n){
    if(n%2 ===0) return 'Even';
    return 'odd';
});

const ParityList2 = nums.map((n)=>{
    if(n%2 ===0) return 'Even';
    return 'odd';
});
*/

/*let Movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
]

const movie = Movies.find(movie => {
    return movie.includes('Mrs');
})

const movie2 = Movies.find(m => {
    return m.indexOf("Mrs") === 0
})
*/
/*const books = [
    {
        Title:'good one',
        Author: ['Tom and Jerry'],
        Rating: 4
    },
    {
        Title:'look one',
        Author: ['Tommy and jaaz'],
        Rating: 5
    },
    {
        Title:'Ask one',
        Author: ['Tommy hilfiger and jasmine'],
        Rating: 6
    },
    {
        Title:'Many one',
        Author: ['Tommy hilfiger New and jasmine'],
        Rating: 6
    }]

    const GoodBook = books.find(b =>
         b.Rating >= 4
    )

    const TomBook = books.find(b=> {
       return b.Author.includes('Tom and Jerry')
    })*/

//when no return statement then use()...else follow upperone.
   /* const TomyBook = books.find(b=> (
         b.Author.includes('Tom and Jerry')
    ))
    

    const nums = [34,35,67,54,109,102,32,9];

    const odds = nums.filter(n => n % 2 === 1);
    const Even = nums.filter(n => n % 2 === 0);

    const BigNums = nums.filter(n => n > 50);

    const NewBooks = books.filter(b => b.Rating >=5)

    const inclusive = books.filter(b => {
     return b.Author.includes('Tomy and jaaz') 
    });

    const inclusive2 = books.filter(b => {
        return b.Author.includes('Tommy and jaaz') ||
        b.Title.includes('Many one') 
       });

   const query = 'one';
    const result = books.filter(book => {
    const title = book.Title.toLowerCase();
    return title.includes(query.toLowerCase())
   })

   const words5 = ['dog','dig','log','bag','wag'];
   */

  /* const all3Sets = words5.every(w => {
       w.length === 3
   });*/

   /*const all3sets = words5.every(w => w.length === 3);
   //(w => w.length === 3)..this is a boolean function which return true or false
   
   const allEndG = words5.every(w=> {
       const last = w.length - 1;
       return w[last] === 'g'
   })
    
   //some is for 1 element
   const someStartWithD = words5.some(d=> d[0] === 'd');
   const EveryStartWithD = words5.every(d => d[0] === 'd');

   const allGoodBooks = books.every(b=> b.Rating >=4);
   const any3Authors = books.some(b => b.Author.length === 3);

   //sorting

   const prices = [400.50,3000,99.99,35.99,12,9500];
   prices.sort();

   const ascsort1 = prices.sort((a,b)=> a-b);

   const dscsort1 = prices.sort((a,b)=> b-a);

   const BookSort = books.sort((a,b) =>b.Rating - a.Rating);
   // a nd b are full single object
   */

   /*const nums = [3,4,5,6,7];
   const sum = nums.reduce((total,currentVal) => {
       return total+currentVal;
   })
   
   const grades = [23,45,76,43,11,98,78,56];

   const maxGrade = grades.reduce((max,currentVal)=>{
    if(currentVal>max)
    return currentVal;
    return max;
   })  
   
   //Another way
   const maxGrade2 = grades.reduce((max,currentVal) => {
    return Math.max(max,currentVal)
   });

   const minGrade = grades.reduce((min,currentVal) => {
       return Math.min(min,currentVal)
   });

   const sum2 = [10,20,30,40,50].reduce((sum,currentVal) => {
       return sum + currentVal;
   })

   //starts with 1000
   const sum3 = [10,20,30,40,50].reduce((sum,currentVal) => {
    return sum + currentVal;
},1000)

const votes = ['y','y','n','absent','y','n','y','n','y','n','n','y','y'];

const results = votes.reduce((tally,val) => {
    if(tally[val])
    {
        tally[val]++
    }
    else{
        tally[val]=1;
    }
    return tally;

    
},{})
*/

//default value
/*function Multiply(x,y)
{
    if(typeof y === 'undefined'){
        y = 1;
    }
    return x*y;
}*/

//another way

/*function Multiply(x,y=2)
{
    return x* y ;
}

const blah = (x,y = [1,2,3]) => {
    console.log(y);
}

const greet = (person,greeting = 'hi', punctuation = '!') => {
    console.log(`${greeting},${person},${punctuation}`);
}

function giveMeFour(a,b,c,d) {
    console.log('a',a);
    console.log('b',b);
    console.log('c',c);
    console.log('d',d);

}

const colours = ['red','orange','yellow','green'];

const str = 'GOAT';

const cephalopods = ['dumbo octopus','humboldt squid','flamboyant cuttlefish'];
const gastropods = ['gaint african snail','banana slug','variable neon slug'];
const cnidaria = ['fire coral','moon jelly'];

const mollusca = [...cephalopods,...gastropods]

cephalopods.concat(gastropods)

const copy = cephalopods;
//copy = cephalopods

*/

//spread objects

/*const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    family:'Caninae',
    furry:true,
    leg:3
};

const dog = {
    ...canine,
    isPet: true,
    adorable:true,
    legs:4
}

const HouseCat = {
    ...feline,
    isGrumpy:true,
    personality:'unpredictable'
}

const FelineDog = {
    ...feline,
    ...dog

}

const CanineDog ={
    ...canine,
    ...dog
}

const random = [...'hello',{
    ...CanineDog
}]
*/
/*
function sum()
{
    //argument is not a array,its a array like object

console.log(arguments);
}

function sum2()
{  // if we want to use argument in array then convert it into a array like [...argument]. 
    const argsArr = [...arguments]
    return argsArr.reduce((total,currVal) =>{
        return total + currVal
    })
}

function fullName(First,Last) 
{
    console.log(arguments);
    console.log(First);
}

const multiply = () =>
{//arrow function does not allow argument
    console.log(arguments);
}
*/

//rest

/*function sum(...nums)
{
    console.log(nums);
}

function sum2(...nums) 
{
    return nums.reduce((total,currVal) =>
    {
        return total+currVal;
    })
}

function fullName(first,last, ...titles)
{
    console.log('first',first)
    console.log('last',last)
    console.log('title',titles)
}

const multiply = (...nums1) => 
{
    return nums1.reduce((total,currVal) => total * currVal)
}
*/

//destructuring array
//passing a value of array by reference

/*const raceResult = [
    'tom',
    'Abraham',
    'Harry',
    'ferry'
]
*/
/*const gold = raceResult[0];
const silver = raceResult[1];
const bronze = raceResult[2];
*/
//reference matter
//const[silver,gold,bronze] = raceResult;
//skip ..type fourth
//const [first, , ,fourth] = raceResult;

//const [winner, ...others] = raceResult;

//Destructuring object

/*const race = {
  first:  'tom',
  TrueLeader: 'Abraham',
  funny:'Harry',
  Movie:'ferry'
}

const  {
    first,TrueLeader,...other
} =race;

const books = [
    {
        Title:'good one',
        Author: ['Tom and Jerry'],
        Rating: 4
    },
    {
        Title:'look one',
        Author: ['Tomy and jaaz'],
        Rating: 5
    },
    {
        Title:'Ask one',
        Author: ['Tommy hilfiger and jasmine'],
        Rating: 6
    },
    {
        Title:'Many one',
        Author: ['Tommy hilfiger New and jasmine'],
        Rating: 6
    }]
 
    const [{Title:anurag},{Author}] = books;

    const race2 = {
        first:  'tom',
        TrueLeader: 'Abraham',
        funny:'Harry',
        Movie:'ferry'
      }

      function print(person)
      {
          const {
            first,
            TrueLeader,
            funny  
          } = person;
          console.log(`${first} ${TrueLeader} ${funny}`)
      }

      function print({
        first,
        TrueLeader,
        funny
      }){
        console.log(`${first} ${TrueLeader} ${funny}`)
      }
   
      const response = [
          'HTTP/1.1',
          '200 OK',
          'Application/json'
      ]

function parseResponse([protocol,statusCode,contentType])
{
    console.log(`${statusCode}`);
}
    
   */
  
   /*const getStats = (arr) => {
       const max = Math.max(...arr);
       const min = Math.min(...arr);
       const sum = arr.reduce((sum,r) => sum + r);
       const avg = sum/arr.length;
       return {
           max:max,
           min:min,
           sum:sum,
           avg:avg
       }
   }

   const reviews = [1,2,3,4,5,6,7,8]

   const stats = getStats(reviews);
    */

   // const role = 'host';
   // const person = 'Anurag';

   /*const team = {
        role:person
    }*/

    //Another way

   /* const team = {};
    team[role] = person;
    */

    /*role2 = 'Director';
    person2 = 'james'

    const team = 
    {
      [role]: person,
      [role2]:person2,
      [1+5+8]:'fourteen'
    }
    */
    /*function addProp(obj,k,v)
    {
        const copy ={
            ...obj
        };
        copy[k]=v;
        return copy;
    }

    const res = addProp(team,'happy',':)')
    */

    //using arrow function

    /*const addProp = (obj,k,v) => {
        return {
            ...obj,
            [k]:v
        }
    }

    const res = addProp(team,'happy',':)')
    */

    /*const math = {
        number:[1,2,3,4,5],
        add: function(x,y) {
            return x+y;
        },
        multiply: function(x,y) {
            return x*y;
        }
    }
*/

//Another way

/*const auth = {
    username:'Tommy Hillfiger',
    login() {
        console.log("logged In")
    },

    logout() {
        console.log("Goodbye")
    }
}*/

/*function sayHi() {
    console.log("Hi")
    console.log(this);
}
*/
//window.alert("hii,how r u ??")

/*const person = {
    FirstName : 'Anurag',
    LastName : 'Bajpai',
    NickName : 'KuKu',
    fullName() {
        console.log(this);
        console.log(this.FirstName);
        console.log(this.LastName);
        console.log(this.NickName);
    }
}*/

//destructuring way

/*const person = {
    FirstName : 'Anurag',
    LastName : 'Bajpai',
    NickName : 'KuKu',
    fullName() {
        const{
       FirstName,
       LastName,
       NickName
    } = this;
    return `${FirstName},${LastName},${NickName}`
},
printBio() {
    console.log(this);
    const FullName = this.fullName();
    console.log(`${FullName} is a person`)
},
//normal function vs arrow function.this keyword.this print window object in arrow funtion ,not print normal function.
laugh: () => {
    console.log(this);
    console.log(`${this.NickName} say hii`)
}
}

const printBio = person.printBio;
*/

/*const annoyer = {
    phrases:["literally","cray cray","I cannot even","Totes!","Yolo","cannot stop,won't stop"],
    pickPhrase() {
        const {
            phrases
        } = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx]
    },
    start() {
this.timerId = setInterval(() => {
    console.log(this.pickPhrase())
},3000)
    },
    stop() {
        clearInterval(this.timerId);
        console.log("this is over")
    }
}*/


//const suits = ['hearts','diamond','spades','clubs'];
//const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';

/*function makeDeck() {
    const deck = [];
    const suits = ['hearts','diamond','spades','clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';

    for(let value of values.split(','))
    {
        for(let suit of suits) 
        {
            deck.push({
                value,
                suit
            })
        }
    }
return deck;
}

function drawcard(deck)
{
    return deck.pop()
}

const myDeck = makeDeck();
const card1 = drawcard(myDeck);
*/



//Another way

/*const myDeck = {
     deck : [],
     DrawnCards : [],
     DrawnCard: [],
     suits : ['hearts','diamond','spades','clubs'],
     values : '2,3,4,5,6,7,8,9,10,J,Q,K,A',

     initializeDeck() {
         //this.values,this.suits,this.deck
         const {
             suits,
             values,
             deck
         } = this;

         for(let value of values.split(','))
         {
             for(let suit of suits) 
             {
                 deck.push({
                     value,
                     suit
                 })
             }
         }  
         //return deck;
       } ,
       DrawCard() {
        const card= this.deck.pop();
        this.DrawnCards.push(card);
        return card;
       },
       drawMultiple(NumCard) {
       const cards = [];
       for(let i=0;i<NumCard;i++)
       {
           cards.push(this.DrawCard());
       }
       return cards;
       },
       shuffle() {
           const {
               deck
           } = this;
           //looping array backward
           for(let i = deck.length - 1 ; i > 0;i--)
        {
            let j = Math.floor(Math.random() * (i+1));
            [deck[i],deck[j]] = [deck[j],deck[i]];
        }
       }
   }
   */

   //By function method

   /*function initializeDeck() {
    const deck = [];
     DrawnCards = [];
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({
          value,
          suit
        })
      }
    }
    return deck;
}
  

function drawcard(deck,DrawnCard)
{
   const card = deck.pop();
   DrawnCard.push(card);
   return card;
}

function drawMultiple(NumCard,deck,DrawnCard) {
    const cards = [];
    for(let i=0;i<NumCard;i++)
    {
        cards.push(deck,DrawnCard);
    }
    return cards;
    }

    function shuffle(deck) {
    
        //looping array backward
        for(let i = deck.length - 1 ; i > 0;i--)
     {
         let j = Math.floor(Math.random() * (i+1));
         [deck[i],deck[j]] = [deck[j],deck[i]];
     }
    }

    const firstDeck = initializeDeck();
    const DrawnCard = [];
    shuffle(firstDeck);

    const hand1 = drawMultiple(5,firstDeck,DrawnCards);
    const hand2 = drawMultiple(5,firstDeck,DrawnCards);
    */

    
   
      //By function method
   
     /* function initializeDeck() {
       const deck = [];
        DrawnCards = [];
       const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
       const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
       for (let value of values.split(',')) {
         for (let suit of suits) {
           deck.push({
             value,
             suit
           })
         }
       }
       return deck;
     }
   
   function drawcard(deck,DrawnCard)
   {
      const card = deck.pop();
      DrawnCard.push(card);
      return card;
   }
   
   function drawMultiple(NumCard,deck,DrawnCard) {
       const cards = [];
       for(let i=0;i<NumCard;i++)
       {
           cards.push(deck,DrawnCard);
       }
       return cards;
       }
       }
    }*/

 
    function deck()
    {
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
    Cards = [];
    PopCards = [];
   // popcards = [];
    for(let value of values.split(',') )
    {
        for(let suit of suits)
        {
           
            //Cards.push(value);
            //Cards.push(suit);
            Cards.push({
                value,
                suit
            })

        }
    }
       
   return Cards;
    
}
const deck2 = deck();
function DrawnCard(Cards,PopCards)
    {
      
      const card2= Cards.pop();
      PopCards.push(card2);
        return card2;
    }

//const card1 = deck();
//const drawn = DrawnCard(card1);

/*function initializeDeck() {
    const deck = [];
    drawnCards = [];
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({
          value,
          suit
        })
      }
    }
    return deck;
  }
  
  function drawCard(deck, drawnCards) {
    const card = deck.pop();
    drawnCards.push(card);
    return card;
  }
  */

 //get element by id
console.dir(document);
document.getElementById('pic1');
document.getElementById('paragraph1');

//get element by tag name

document.getElementsByTagName('input');
document.getElementsByTagName('p');

//get element by class name

document.getElementsByClassName('header');
document.getElementsByClassName('special');

/*ul.getElementsByClassName('special');
const ul = document.getElementsByTagName('ul')[0]
ul.getElementsByClassName('special')
*/

//universal selector
/*
document.querySelector('h1');
document.querySelector('p');
document.querySelector('input');
document.querySelector('#pic1');
document.querySelector('#paragraph1');*/

/*document.querySelector('input')
//output: <input type="text" placeholder="FirstName"></input>

document.querySelectorAll('input')
document.querySelectorAll('.special')
*/

////////////////
//more on dom manipulation
/*
const h1 = document.querySelector('h1')
h1.innerText

//inner text write evertything include tag

h1.innerText = "I m Hungry!"
//h1.textContent write space too
h1.textContent = "I m Hungry!"*/

//const ul = document.querySelector('ul')
//ul.innerText

 /*document.querySelector('body')
 document.body.innerText*/

 //h1.innerText = "I m Hungry!"
/*const form = document.querySelector('form')
form.innerHTML*/
//form.html print everything in result

//const ul = document.querySelector(ul);
//ul.innerHTML
//inner html does not write full..it exclude tag

/*const input = document.querySelector('input')

const a = document.querySelector('a');
a.href

const img = document.querySelector('img')
img*/


//get Attributes and set attributes

//const range = document.querySelector('input[type="range"]')

/*range.getAttribute('max')

range.getAttribute('min')
"100"
range.getAttribute('type')
"range"
range.getAttribute('lloool')
null
*/
//range.setAttribute('type','radio')

/*FirstLI=document.querySelector(li)
FirstLI.parentElement
FirstLI.parentElement.parentElement
ul = document.querySelector('ul')
ul.children
ul.children[0].innerText
ul.nextElementSibling*/

//////////////////////
/*const allLis = document.querySelectorAll('li');
const color = ['red','orange','yellow','green','blue','purple'];

for(let i = 0;i<allLis.length;i++)
{
    console.log(allLis[i].innerText);
}

for(let li of allLis)
{
    li.innerHTML = 'we r the champion'

}

allLis.forEach((el,i) => {
  const colors = color[i]  
    console.log(el,colors)
})
*/
/*const h1 = document.querySelector('h1')
const compStyles = getComputedStyle(h1)
compStyles.color
"rgb(0, 128, 128)"
compStyles.fontSize
"60px"
*/

/*const todo = document.querySelector('#todos .todo');

todo.style.color = 'gray';
todo.style.textDecoration = 'line-through';
todo.style.opacity = '50%';

todo.getAttribute('class')
todo.setAttribute('class','done')
todo.setAttribute('class','todo done')

todo.classList
*/


/*const todo = document.querySelector('#todos .todo');
undefined
todo.getAttribute('class')
"todo"*/

/*todo.classList.remove('done')
todo.classList.toggle('done')

todo.setAttribute('class',todo.getAttribute('class') + 'done')
todo.getAttribute('class').includes('done')*/


///
//create element*******

/*const newh = document.createElement('h2')
newh.innerHTML='i like animals'

const section = document.querySelector('section')
section.appendChild(newh)

const NewImage = document.createElement('img');

NewImage.src = 'buddha.jpg';
document.body.appendChild(NewImage);


const NewLink = document.createElement('a');
NewLink.innerText = 'hii i m here';
NewLink.href = 'www.google.com';

const Firstp = document.querySelector('p');
Firstp.appendChild(NewLink);


const parentUL = document.querySelector('ul')


const newLI = document.createElement('li')
newLI.innerText = 'hii i m LI';
parentUL.appendChild(newLI)



const firstLI = document.querySelector('li.todo')
parentUL.insertBefore(newLI,firstLI)
*/

/*const i = document.createElement('i')
i.innerText = "I M ITALIC!!!"

const FirstP = document.querySelector('p')
FirstP.insertAdjacentElement('beforebegin',i)
FirstP.insertAdjacentElement('afterend',i)
FirstP.insertAdjacentElement('afterbegin',i)

*/

/////Remove method
/*const ul = document.querySelector('section ul')
const removeMe = ul.querySelector('.special')
const deleted = ul.removeChild(removeMe)*/

/*const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]
*/

/*const ulParent = document.createElement('ul');
for(let game of warriorsGames)
{
const 
{
    homeTeam,
    awayTeam
} = game;

const gameLi = document.createElement('li');
//gameLi.innerText = `${awayTeam.team} @ ${homeTeam.team}`;
const teamNames = `${awayTeam.team} @ ${homeTeam.team}`;
const ScoreLine = `${awayTeam.points}-${homeTeam.points}`;
gameLi.innerText = `${teamNames} ${ScoreLine}`
console.log(ScoreLine);
ulParent.appendChild(gameLi);
}

document.body.prepend(ulParent);

*/

//another way

/*const ulParent = document.createElement('ul');
for(let game of warriorsGames)
{
const 
{
    homeTeam,
    awayTeam
} = game;

const 
{
  team:  hTeam,
  points: hPoints
} = homeTeam;

const 
{
    team: aTeam,
    points: aPoints
} = awayTeam;

const gameLi = document.createElement('li');
//gameLi.innerText = `${awayTeam.team} @ ${homeTeam.team}`;
const teamNames = `${aTeam} @ ${hTeam}`;
let ScoreLine;
if(aPoints > hPoints)
{
  ScoreLine = `<b>${aPoints}</b>-${hPoints}`;
}
else
{
   ScoreLine = `${aPoints}<b>-${hPoints}<b>`;
}
//const ScoreLine = `${aPoints}-${hPoints}`;
if( hTeam ==='Golden State' )
{
console.log(homeTeam)
}
else
{
   console.log(awayTeam) 
}
if(gameLi.classList.add(hTeam.isWinner))
{
    console.log('win')
}
else
{
console.log('loss')
}
gameLi.innerHTML = `${teamNames} ${ScoreLine}`
console.log(ScoreLine);
ulParent.appendChild(gameLi);
}

document.body.prepend(ulParent);
*/

/*const btn = document.querySelector('#clicker');
//btn.onclick = alert('hii!!!')
btn.onclick = function() 
{
    console.log('you clicked me');
}

btn.ondblclick = function()
{
    console.log('Double click')
}*/

/*const btn = document.querySelector('#clicker2');

btn.addEventListener('click',function()
{
    alert('clicked');
});

btn.addEventListener('click',function(){
    console.log('second thing');
});

btn.addEventListener('mouseover',function()
{
    btn.innerText = 'stop touching me';
})

btn.addEventListener('mouseout',function()
{
btn.innerText = 'Click me';
});

window.addEventListener('scroll',function()
{
    console.log('stop scrolling');
});
*/
/*btn.addEventListener('mouseover',function()
{
console.log('Moused Over Me!')
btn.style.left = '200px';
btn.style.top = '100px'
});*/

/*btn.addEventListener('mouseover',function()
{
console.log('Moused Over Me!')
const height = Math.floor(Math.random() * window.innerHeight);
const width = Math.floor(Math.random() * window.innerWidth);
btn.style.left = `${width}px`;
btn.style.top = `${height}px`;
});

//window.innerHeight
//window.innerWidth

btn.addEventListener('click',function()
{
    btn.innerText = 'you got me';
    //document.body.style.backgroundColor = 'blue';
});

*/

const colours = 
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

/*const container = document.querySelector('#boxes')

for(let color of colours)
{

    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click',function()
    {
        console.log(box.style.backgroundColor);
    });

}*/

//another method
const h1 = document.querySelector('#print');
const printColor = function()
{ //const h1 = document.querySelector('#print');
    
    h1.style.color = this.style.backgroundColor;
};
const container = document.querySelector('#boxes')
for(let color of colours)
{
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click',printColor);
    
}

document.body.addEventListener('keypress',function(e){
console.log(e);
})

const input = document.querySelector('#username');
input.addEventListener('keydown',function(e)
{
  console.log("Key Down");  
})

input.addEventListener('key up',function(e)
{
  console.log("Key up");  
})


