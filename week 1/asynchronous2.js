//defining my own asynchronous function 

//I'm writing my own asynchronous function under the hood of asynchronous function

function myOwnSetTimeout(callback,duration){
    setTimeout(callback,duration);
}

myOwnSetTimeout(function(){
    console.log("hello abhishek")
},2000);


//Promise

/*
-> Promises in JavaScript are a syntactic sugar that means it
    make asynchronous code more readable and manageable.

-> Promises provide a more structured and powerful way to handle 
    asynchronous operations compared to traditional callback-based approaches.

-> handling multiple asynchronous operations often led to "callback hell"
     where nested callbacks made the code difficult to read and maintain.
*/

//let promisify the above asynchronous function


//defining promise
function promisifymyOwnSetTimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(resolve,duration);
    });

    return p;

}

//calling promise
const ans = promisifymyOwnSetTimeout(2000);
ans.then(function(){
    console.log("hello abhishek");
});



/*

-> Promise is a class.
-> When you create a new promise using the new Promise syntax, 
    you are essentially creating an instance of the Promise class.
-> Promises have instance methods like .then(), .catch(), and .finally() to 
    handle the completion of the asynchronous operation.

*/