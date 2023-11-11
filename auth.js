const register = function(username){    
    console.log(`username: ${username} has been registered`);
}

const login = function(username){    
    console.log(`username: ${username} has been login`);
}


//objects m assign ho jata hai key and value pair.
// module.exports =  {
//     register:register,
//     login:login,
// }


//or 

module.exports = {
    register,
    login
}


