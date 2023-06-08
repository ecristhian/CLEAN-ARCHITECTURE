var express = require('express');
var HttpStatus = require('http-status-codes');
const { deudaBussinessImplement } = require('../../../model/usecase/implements');
var cors = require('cors');

var app = express();
app.use(cors());

app.get('/consulta/idCliente/:idCliente/idEmpresa/:idEmpresa', (req,res)=>{
 let idCliente = req.params.idCliente;
 let idEmpresa = req.params.idEmpresa;
//console.log("idEmpresa--", idEmpresa)

deudaBussinessImplement.consultaDeuda(idCliente, idEmpresa).
then(
 deudas=>{
    //console.log('12');
    res.status(HttpStatus.OK)
    .json(deudas);
    },
 error=>{console.log("ERROR DE PROCESO",error)}
)

});

app.put('/pagar',(req,res)=>{

    let deuda = req.body;
    /*let deuda = {
        id: obj.id,
        monto:obj.monto,
        cliente:obj.cliente,
        producto:obj.producto    
    };*/
    deudaBussinessImplement.pagarDeuda(deuda)
    .then(
        value=>{
           //console.log('12');

           res.status(HttpStatus.OK)
           .json({codigo:'001',descripcion:'Proceso Conforme'});
           },
        error=>{console.log("ERROR DE PROCESO",error)}
       );
    
    

});
app.put('/extornar',(req,res)=>{

    let deuda = req.body;
    /*let deuda = {
        id: obj.id,
        monto:obj.monto,
        cliente:obj.cliente,
        producto:obj.producto    
    };*/
    deudaBussinessImplement.extornarDeuda(deuda)
    .then(
        value=>{

           res.status(HttpStatus.OK)
           .json({codigo:'001',descripcion:'Proceso Conforme'});
           },
        error=>{console.log("ERROR DE PROCESO",error)}
       );
    
    

});

app.post('/registrar',(req,res)=>{
    let deuda = req.body;
    //console.log("informacio",req.body );
    deudaBussinessImplement.registraDeuda(deuda)
    .then(
        value=>{
           //console.log('12');

           res.status(HttpStatus.CREATED)
           .json({codigo:'001',descripcion:'Proceso Conforme'});
           },
        error=>{console.log("ERROR DE PROCESO",error)}
       );
    
});

app.delete('/eliminar/idFactura/:idFactura', (req,res)=>{
    let idFactura = req.params.idFactura;
   console.info("app.get-->",idFactura);
   deudaBussinessImplement.eliminarDeuda(idFactura).
   then(
    value=>{
       //console.log('12');
       res.status(HttpStatus.OK)
       .json({codigo:'001',descripcion:'Proceso Conforme'});
       },
    error=>{console.log("ERROR DE PROCESO",error)}
);
});


module.exports=app;