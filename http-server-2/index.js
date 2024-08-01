/*create an http server where it takes n as input and calculate sum 
step1 - run npm init -y
step2 - run npm install express
step3 - run node index.js
*/


const express = require("express"); //initialize express

//takes n and calculate sum
function calculateSum(n){
    let ans = 0;
    for(let i=1;i<=n;i++){
        ans = ans + i;
    }
    return ans;
}

const app  = express();

app.get('/', function(req,res){     // '/' is route , whatever written after 3000(port) (req=reuest and res=result)
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send(ans.toString());
})

app.listen(3000);       //this 3000 shows which it will render it (whiwhich port)


//this is an http server where it takes n as input and gives result it sums

// for checking this in my browser http://localhost:3000/?n=5  (n=5 is input)