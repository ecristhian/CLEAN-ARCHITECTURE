var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
     username: {type:String,required:[true,'El nombre es requerido']},
     password: {type:String,required:[true,'El password es requerido']}
}
);

//usuarioSchema.plugin(uniqueValidator,{message:'el {PATH} debe ser unico'});
module.exports = mongoose.model('Usuario',usuarioSchema);