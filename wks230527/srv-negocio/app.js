var express=require('express');
var bodyParser = require('body-parser');
var HttpStatus = require('http-status-codes');
require('./adpaterinfraestructure/config/config');
const { Conexion } =  require('./adpaterinfraestructure/config/conecction');

var app=express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

let conn = new Conexion().getConection();

app.get("/",(req,res)=>{
    res.send('invocando el metodo get');
})

var deudasRoutes = require('./adpaterinfraestructure/input/routes/deudas');

app.use('/deuda', deudasRoutes);

const port = process.env.PORT;

app.listen(port,()=>{
   console.log(`Servidor escuchando en el puerto ${port}`);
});