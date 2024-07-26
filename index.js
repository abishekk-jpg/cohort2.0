//In week 2.2 i learn about node.js
//In these i learn how create an HTTP Server

/*There are many libraries to create an http server but here we use express
1- run npm init -y command
2- write const express = require("express"); //add express library
3- run npm install express command
4- go to google search hello world code in express and copy here
5- and after finaaly go to localhost 3000 to check it writes hello abhishek

*/


const express = require("express"); //add express library
const app = express()
const port = 3000

app.get('/', function(req, res){        //the '/' here is route we alredy study
  res.send('Hello abhishek')
})

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})
