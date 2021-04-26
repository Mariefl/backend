const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    nom: { type: String , required:true},
    prenom: {type: String ,required:true},
    email: {type: String ,required:true , unique:true},
    mdp: {type: String ,required:true},
    sexe: {type: String,required:true },
});

userSchema.plugin(uniqueValidator);

module.exports =mongoose.model('User', userSchema);
