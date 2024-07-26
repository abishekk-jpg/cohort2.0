function findSum(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum += i;
    }
    return sum;
}

function findTill1000(){
    console.log(findSum(1000));
}

setTimeout(findTill1000,1000);  //setTimeout function is a asynchronous function

console.log("hello abhishek");


/* Asynchronous operations are those that can run independently of 
the main program flow, allowing the program to continue running while 
waiting for the operation to complete.

Real-World Example: Cooking Breakfast

Imagine you're cooking breakfast, and you have three tasks:

Frying an egg
Making toast
Brewing coffee
If you were to do these tasks synchronously, it would look something 
like this:

Fry the egg (wait until the egg is fully cooked)
Make the toast (wait until the toast is ready)
Brew the coffee (wait until the coffee is ready)

This means you would stand idle while waiting for each task to complete before 
starting the next one. This is not efficient because you're wasting time that could 
be used to perform other tasks.

Instead, let's consider doing these tasks asynchronously:

Start frying the egg (but don't wait for it to finish, move on to the next task)
Start making the toast (but don't wait for it to finish, move on to the next task)
Start brewing the coffee (but don't wait for it to finish)

Now, you're not standing idle; you're utilizing your time efficiently by overlapping the 
tasks. You can check on each task periodically and handle them as they finish.

 the program doesn't wait for each task to complete one by one but instead runs them in 
 parallel, resulting in a more efficient and faster breakfast preparation.
 */