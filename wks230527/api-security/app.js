require('./infraestructure/config/config');
const express = require('express');


var bodyParser = require('body-parser');
var HttpStatus = require('http-status-codes');


const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



//validando
app.get("/",(req,res)=>{
    
    //const conn = mongoose.connection();
    
     res.send('invocando el metodo get');
})

var loginRoutes = require('./infraestructure/entrypoints/routes/login');

app.use('/api/security',loginRoutes);


const port = process.env.PORT;


app.listen(port,()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
 });