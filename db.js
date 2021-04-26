const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Utilisateurs' , (err) =>{
    
if(!err)
 
     console.log('connexion reussi');
 
     else
     console.log('connexion echoué : '+ JSON.stringify(err, undefined, 2));

});

module.exports = mongoose;