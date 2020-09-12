//javascript r single threaded.do 1 things at a time.
/*console.log("hii");
alert("i m anurag");
console.log("i m gr8 too");

//javascript put setTimeout/callback funtion at web Api.and look forward to next console.log on stack.
console.log('It happens first');
setTimeout(function(){
    console.log('it happen second')
},3000);

setTimeout(function(){
    console.log('it happen third')
},7000)

console.log('it happen fourth');
*/

///////////////////////////////

const btn = document.querySelector('button');

/*setTimeout(() => {
    btn.style.transform = `translateX(100px)`;
    setTimeout(() => {
        btn.style.transform = `translateX(200px)`;
        setTimeout(() => {
            btn.style.transform = `translateX(300px)`;
            setTimeout(() => {
                btn.style.transform = `translateX(400px)`;
                setTimeout(() => {
                    btn.style.transform = `translateX(500px)`;
                },1000);
            },1000)
        },1000)
    },1000)
},1000)
*/


/*setTimeout(() => {
    btn.style.transform = `translateX(100px)`},1000)*/

    //Another way
    /*const moveX = (element,amount,delay,SuccessCallBack,FailureCallBack) => {
    
             setTimeout(() => {
                element.style.transform = `translateX(${amount}px)`;
                if(SuccessCallBack) SuccessCallBack();
    
            },delay);
        };

        moveX(btn,100,1000,() => {
            moveX(btn,200,1000,() => {
                moveX(btn,300,1000,() => {
                    moveX(btn,400,1000,() =>{
                        moveX(btn,500,1000);
                    });
                });
            });
        });
        */

        //one more method

   
        
 // moveX(btn,600,2000);

  /*moveX(btn,100,1000,() => {
      moveX(btn,200,1000,() => {
          moveX(btn,300,1000,() => {
              moveX(btn,400,1000,() =>{
                  moveX(btn,500,1000);
              });
          });
      });
  });
     */

     /*const willGetYourDog = new Promise((resolve,reject)=>{
        setTimeout(()=> {
            const rand = Math.random();
            if(rand<0.5) {
                resolve();
            }
            else{
                reject();
            }
        },5000);
        }); 
       
     willGetYourDog.then(() => {
         console.log('we got a dog');
     });

     willGetYourDog.catch(() => {
         console.log('No Dog');
     });*/

     //Another way
     
     /*const makeDogPromise = () =>{
     return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            const rand = Math.random();
            if(rand<0.5) {
                resolve();
            }
            else{
                reject();
            }
        },5000);
        }); 
    }
   makeDogPromise().then(() => {
         console.log('we got a dog');
  })
  .catch(() => {
 console.log('No Dog')
  })*/

 // axios.get('reddit.com').then().catch()
 //below example is not a promise.FUNCTION SHOULD RETURN A PROMISES.

 //same program different approach

 /*const fakeRequest = (url) =>{
     return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            const rand = Math.random();
            if(rand<0.5) {
                reject({status:404});
            }
            else{
                const pages = {
                    '/users': [
                     {id:1,username:'Gita'},
                     {id:5,username:'Bible'}
                    ],
                    '/about':'This is about page'
                };
                const data = pages[url]
                resolve({status:200,data});
            }
        },1000);
        }); 
    }
   fakeRequest('/users')
   .then((res)=> {
    console.log('Status Code',res.status);
    console.log('Data',res.data);
       console.log('Request Worked!');
   })
    .catch((res) => {
        console.log(res.status);
        console.log('Request Failed');
    });
    */

    //Take a More number of cases 

    //This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users'        : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/users/1'      : {
					id        : 1,
					username  : 'Bilbo',
					upvotes   : 360,
					city      : 'Lisbon',
					topPostId : 454321
				},
				'/users/5'      : {
					id       : 5,
					username : 'Esmerelda',
					upvotes  : 571,
					city     : 'Honolulu'
				},
				'/posts/454321' : {
					id    : 454321,
					title :
						'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
				},
				'/about'        : 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			}
			else {
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};

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



fakeRequest('/users').then((res) => {
    // console.log(res.data[0]);
    console.log(res);
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`);
})
.then((res) => {
    console.log(res);
    const postId = res.data.topPostId;
    return fakeRequest(`/posts/${postId}`);

})
.then((res) => {
console.log(res);
})
.catch((err) => {
    console.log('oh No!',err);
});

//previous program with callback
const moveX = (element,amount,delay) =>{
    return new Promise((resolve,reject) => {
     setTimeout( () => {
         const bodyBoundary = document.body.clientWidth;
         const elRight = element.getBoundingClientRect().right;
         const currLeft = element.getBoundingClientRect().left;
         if(elRight + amount > bodyBoundary)
         {
             reject({bodyBoundary,elRight,amount});
         }
         else{
             element.style.transform = `translateX(${currLeft + amount}px)`;
             resolve();
         }
     },delay);
    });
};


    moveX(btn,300,1000)
    .then(() => {
        return moveX(btn,300,1000);
    })
    .then(() => {
        return moveX(btn,300,1000);
    })
    .then(() => {
        return moveX(btn,300,1000);
    })
    .then(() => {
        console.log('Done with all');
    })
    .catch(({bodyBoundary,amount,elRight}) => {
        console.log(`body is ${bodyBoundary}px wide`);
        console.log(`Element is at ${elRight}px,${amount}px is too large`);
    });

    