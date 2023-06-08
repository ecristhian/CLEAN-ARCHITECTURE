var express=require('express');
var bodyParser = require('body-parser');
require('./infraestructure/config/config');

var deudasRoutes = require('./infraestructure/entrypoints/routes/deudas');

var app=express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



app.get("/",(req,res)=>{
    res.send('invocando el metodo get');
})



app.use('/bff/deuda', deudasRoutes);

const port = process.env.PORT;

app.listen(port,()=>{
   console.log(`Servidor escuchando en el puerto ${port}`);
});