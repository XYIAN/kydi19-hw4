
/* global $ */

$(document).ready(function()
{
const faker = require('faker'); 

var randomName = faker.name.findName(); // Caitlyn Kerluke
var randomEmail = faker.internet.email(); // Rusty@arne.info
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

console.log("test"); 
$("#h2").html(randomName); 
$("#h3").html(randomCard); 
$("#h4").html(randomName); 
$("#h5").html(randomEmail); 
//var answer = readline();
for(let i = 0 ; i < 5 ; i++)
{
    alert("test!");
    $("#h4").html("INFO FOR CLIENT ID: " +[i] );
    $("#h2").html(faker.fake( "{{name.lastName}}, {{name.firstName}} {{name.suffix}} "));
    $("#h5").html(faker.fake( "EMAIL   : {{internet.email}} "));
    $("#h3").html(faker.fake( "FINANCE : {{finance.currencyCode}} Amount:{{finance.amount}} :: BITCOIN ADDRESS: {{finance.bitcoinAddress}}"));
}
//console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}} " +"EMAIL:"+ randomEmail));
});