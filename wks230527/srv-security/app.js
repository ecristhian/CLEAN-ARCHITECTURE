require('./infraestructureadapter/config/config');
const express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var dataSource = require('./infraestructureadapter/config/connection');
var loginRoutes = require('./infraestructureadapter/input/security-route');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//coneccion



//conectandome a la db y creando un pool por defentco de conexiones
dataSource();


//validando
app.get("/",(req,res)=>{
    
    //const conn = mongoose.connection();
    
     res.send('invocando el metodo get');
})



app.use('/security',loginRoutes);


const port = process.env.PORT;


app.listen(port,()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
 });