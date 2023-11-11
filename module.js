
// const color = require('cli-color')

// console.log(color.yellow("Hello Nodejs from javascript"));

// IIFE FUNCTION(Immediately Invoked Function Expression)
// (function(name){
//     var age = 25;
//     var name = "Saurabh";
//     console.log(name,age);
// })()

//IIFE(invoke function)

//local module
const auth = require('./auth')
auth.register('saurbh kumar')
auth.login('saurabh kumar')
