
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
// const auth = require('./auth')
// auth.register('saurbh kumar')
// auth.login('saurabh kumar')


//core module

//path

const { log } = require('console')
const path = require('path')

// console.log(__filename);

//dirname

// console.log('Folder name:', path.dirname(__filename))

//filename

// console.log('Folder name:', path.basename(__filename));

//extension

// console.log('ext name:', path.extname(__filename));


//parse 

 console.log('parse :', path.parse(__filename));



