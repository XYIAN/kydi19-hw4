/* global $ */
const express = require('express'); 
const app = express(); 
app.engine('html', require('ejs').renderFile);//render other files
app.use(express.static("public"));//access img css js or any external file
const faker = require('faker'); 
//routes ---can also be POST method vs get

var randomName = faker.name.findName(); 
var randomEmail = faker.internet.email(); 
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

app.get("/", function(req,res)//root route
{
   res.render("index.ejs");
   //res.send("it works!"); 
   
});
app.get("/p2", function(req,res)//root route
{
   res.render("p2.ejs");
   //res.send("it works!");
   
   
   
   
});
app.get("/p3", function(req,res)//root route
{
   res.render("p3.ejs");
   //res.send("it works!"); 
   
});
app.get("/p4", function(req,res)//root route
{
   res.render("p4.ejs");
   //res.send("it works!"); 
   
});


//server listener - run server w/ port number
//8081(have to include in url) , "0, 0 , 0 , 0" -used for php type
app.listen(process.env.PORT, process.env.IP , function()//using local host port 8080 127
{
    console.log("Express Server is Running...");
});
//end basic express code


















//copy pasters :::

// const express = require('express'); 
// const app = express(); 
// //routes ---can also be POST method vs get
// app.get("/", function(req,res)
// {
//   res.send("it works!"); 
// });

// //server listener 
// app.listen("8081" , "0.0.0.0" , function()//using local host
// {
//     console.log("Express Server is Running...");
// });
// //end basic express code