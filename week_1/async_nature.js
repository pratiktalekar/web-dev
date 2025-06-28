// CALLBACK FUNCTION
/*
callback function : passing a function to another function as parameter in nothing but callback function
*/

function fetchData1(callback){ 
    setTimeout(() =>{
        const data = "here! this is your data";
        callback(data);
    },1000);
}

fetchData1((result) =>{
    console.log(result)
})


// PROMISES
/*
promise is a object that results completion of async function and return its value
*/
const fetchData2 = (userId) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if( userId>0 ) {
                resolve("here is your data")
            }
            else{
                reject("there is error")
            }
        },1000);
    })
}

fetchData2(1)
    .then(user => console.log("User :", user))
    .catch(error => console.error(error))


// ASYNC AWAIT FUNCTIONS

async function fetchData3() {
    try{
        const data = await fetchData2();
        console.log(data)
    } catch(error){
        console.log(error)
    }
}

fetchData3();