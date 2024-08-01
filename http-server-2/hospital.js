/*lets create an in memory hospital http server
you need to create 4 routes(4 thing that hospital can do)

1-GET - user can check how many kidneys and health they have
2-POST - user can add new kidney
3-PUT - user can replace kidney,make it health
4-DELETE - user can remove kidney
*/


const express = require("express");
const app = express();

//create a JavaScript array of objects name and kidney(which takes two objects)
var users = [{
    name:'abhishek',
    kidneys:[{
        healthy:false
    },{
        healthy:true
    }]
}];

app.use(express.json());


app.get('/', function(req,res){
    const abhishekkidney = users[0].kidneys;
    const totalkidney = abhishekkidney.length;

    let numberofHealthyKidney = 0;
    for(let i=0;i<totalkidney;i++){
        if(abhishekkidney[i].healthy==true){
            numberofHealthyKidney = numberofHealthyKidney + 1;
        }
    }

    const numberofUnhealthykidney = totalkidney - numberofHealthyKidney;

    res.json({
        totalkidney,
        numberofHealthyKidney,
        numberofUnhealthykidney
    })
})


/* o/p of get operation
    {
    "totalkidney": 2,
    "numberofHealthyKidney": 1,
    "numberofUnhealthykidney": 1
  }


  json used to show data in key value pair

*/

app.post('/', function(req,res){
    const ishealthy = req.body.ishealthy
    users[0].kidneys.push({
        healthy:ishealthy
    })

    res.json({
        msg:"Done!"
    })
})


/*

for the POST request we use "Postman" tool 

It provides a user-friendly interface for sending 
HTTP requests and viewing responses, making it easier for developers 
to interact with APIs and troubleshoot issues.

here user can add new kidney(ishealthy check i.e healthy or unhealthy)

*/

app.put('/', function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }

    res.json({})
})

/*
in put request we update all unhealthy kidneys to healthy 

before the put request 
{
  "totalkidney": 2,
  "numberofHealthyKidney": 1,
  "numberofUnhealthykidney": 1
}

after the put request 
{
  "totalkidney": 2,
  "numberofHealthyKidney": 2,
  "numberofUnhealthykidney": 0
}
*/

app.delete('/', function(req,res){
    const newKidney = []
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidney.push({
                healthy : true
            });
        }
    }
    users[0].kidneys=newKidney;

    res.json({
        msg:"Done!"
    })
})

/*
in delete request we made an new array and push all the healthy kidnys in them 
and just update the old array

before 
{
  "totalkidney": 2,
  "numberofHealthyKidney": 1,
  "numberofUnhealthykidney": 1
}

after
{
  "totalkidney": 1,
  "numberofHealthyKidney": 1,
  "numberofUnhealthykidney": 0
}
*/


app.listen(3000);