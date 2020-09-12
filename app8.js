//difference between javascript object and json is that we cannot pass function in json.

/*const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load',() => {
    console.log("it workes");
});

firstReq.addEventListener('error',() => {
    console.log('ERROR');
});

firstReq.open('GET',"https://swapi.dev/api/planets/1");
firstReq.send();
console.log('Request Sent');
*/

//another way

/*const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load',function()  {
    console.log("it workes");
   // console.log(this.responseText);
   //this.responseText;
  // console.log(firstReq.responseText);
  const data = JSON.parse(this.responseText);
  //console.log(data);*/
  /*for(let planet of data.results)
  {
      console.log(planet.name);
  }*/
   //const filmURL = data.results[0].films[0];
   //console.log(filmURL);
   /*const filmReq = new XMLHttpRequest();

   filmReq.addEventListener('error',function(e){
       console.log('second request work');
       console.log(this);
   });
});

filmReq.open('GET',filmURL);

firstReq.addEventListener('error',() => {
    console.log('ERROR');
});

firstReq.open('GET',"https://swapi.dev/api/planets/1");
firstReq.send();
console.log('Request Sent');
*/

//fetch
//fetch request doesnot support internet explorer 

/*fetch("https://swapi.dev/api/planets/1/")
.then((response) => {
  response.json().then((data) => {
  console.log(data);
  });
})
.catch((err) => {
console.log('something went wrong with Fetch');
console.log(err);
});
   */
//Another way

/*fetch("https://swapi.dev/api/planets/1/")
.then((response) => {
    if(!response.ok)
    throw new Error(`Status Code Error:$(response.status)`);
  response.json().then((data) => {
  console.log(data);

  })
  .then((data) => {
   for(let planet of data.results)
   {
       console.log(planet);

   }
  }
)
.catch((err) => {
console.log('something went wrong with Fetch');
console.log(err);
});
});
*/


//Axios
//axios ,we do not need to use response and pass json data
/*axios
.get("https://swapi.dev/api/planets/1/")
.then((res) =>{
    console.log(res.data);
    for(let planet of res.data.results)
    {
        console.log(planet.name)
    }
    return axios.get(res.data.results)

})
.then((res) => {
   console.log(res.data.results)
})
//and so on(then)
.catch((err) => {
    console.log("in catch");
console.log(err);

});

//another way

const fetchNextPlanet = (url = "https://swapi.dev/api/planets/1/") => {
    console.log(url);
    return axios.get(url);
}
*/

   
//callback Await function

/*function getData() 
{
    const data=axios.get("https://swapi.dev/api/planets/1/")
    .then((data) => {
        //asyn retun last
        console.log(data);
    })
    console.log(data);
}*/

/*function greet() 
{
    return 'Hello';
}*/

/*async function greet() 
{//this asyn returns promises
    return 'Hello';
}

greet().then((val) => {
    console.log('promises resolve with ',val);

});*/

 /*function add(x,y) {
    //without Async return on value not promises.
    if(typeof x !== 'number' || typeof y !== 'number')
    {
        throw 'X and Y must be Number'
    } 
    return x + y;
}*/

/*async function add(x,y) {
    //async returns promises
    if(typeof x !== 'number' || typeof y !== 'number')
    {
        throw 'X and Y must be Number'
    } 
    return x + y;
}


add('e','r')
.then((val) => {
    console.log('promise Resolved with',val);

})
.catch((err) => {
    console.log('promise rejected with:',err);
});

//another way
function add(x,y)
{
    return new Promise((resolve,reject) =>{
        if(typeof x !== 'number' || typeof y !== 'number')
        {
            throw 'X and Y must be Number'
        }
        resolve(x+y); 
    });
}

add(2,3)
.then((val) => {
    console.log('promise Resolved with',val);

})
.catch((err) => {
    console.log('promise rejected with:',err);
});
*/

//await keyword

/*function getPlanet()
{
   return axios.get("https://swapi.dev/api/planets/1/");

}

getPlanet().then((res) => {
    console.log(res.data)
});
*/
/*async function getPlanet() {
    const res = await axios.get("https://swapi.dev/api/planets/1/");
    console.log(res.data);
}

getPlanet();
*/

/*async function getPlanet() {
    try {
const res = await axios.get("https://swapi.dev/api/planets/1/");
console.log(res.data);
    } catch (e)
{
    console.log('IN CATCH',e);
}
}

getPlanet();
*/

/*fakeRequest('/users').then((res) => {
   // console.log(res.data[0]);
   const id = res.data[0].id;
   fakeRequest(`/users/${id}`).then((res) =>{
       const postId = res.data.topPostId;
      // console.log(res);
      fakeRequest(`/posts/${postId}`).then((res) => {
          console.log(res);
      });
   }).catch((err) => {
       console.log('oh No',err);
   });

});*/

//1 more good way

/*async function get3Pokemon() {
//poke1 should finish req first then poke2 then poke3
const poke1= await axios.get('https://pokeapi.co/api/v2/pokemon/1');
const poke2= await axios.get('https://pokeapi.co/api/v2/pokemon/2');
const poke3= await axios.get('https://pokeapi.co/api/v2/pokemon/3');

console.log(poke1.data);
console.log(poke2.data);
console.log(poke3.data);

}
get3Pokemon();
*/

function changeBodyColor(color,delay) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        },delay);
    });
}
//if we do not write await keyword then function must return promises
/*async function lightShow() {
    await changeBodyColor('teal',1000);
    await changeBodyColor('pink',1000);
    await changeBodyColor('indigo',1000);
    await changeBodyColor('violet',1000);
}

lightShow();*/

//changeBodyColor('teal',1000);

//await concept

async function lightShow() {
 const promise1 = changeBodyColor('teal',1000);
 const promise2 =   changeBodyColor('pink',1000);
 const promise3 =changeBodyColor('indigo',1000);
 const promise4 = changeBodyColor('violet',1000);

 const results = await Promise.all([promise1,promise2,promise3,promise4]);
 console.log(results);
 /*await promise1;
 await promise2;
 await promise3;
 await promise4;
 */
}
lightShow();