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
var pro = faker.internet.url; 
app.get("/", function(req,res)//root route
{
   res.render("index.ejs",{
      name: faker.name.findName() , 
      email: faker.internet.email(), 
      card: faker.address.zipCode(), 
      url: faker.internet.url()
   });
   //res.send("it works!"); 
   
});
app.use("/p2", function(req,res)//root route
{
   res.render("p2.ejs", {
      name: faker.name.findName() , 
      email: faker.internet.email(), 
      card: faker.address.zipCode(), 
      url: faker.internet.url()
   });
   //res.send("it works!");
   
   
   
   
});
app.get("/p3", function(req,res)//root route
{
   res.render("p3.ejs", {
      name: faker.name.findName() , 
      email: faker.internet.email(), 
      card: faker.address.zipCode(), 
      url: faker.internet.url()
      
   });
   //res.send("it works!"); 
   
});
app.get("/p4", function(req,res)//root route
{
   res.render("p4.ejs", {
      name: faker.name.findName() , 
      email: faker.internet.email(), 
      card: faker.address.zipCode(), 
      url: faker.internet.url()
   });
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