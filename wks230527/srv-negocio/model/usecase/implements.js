const implementjs = require('implement-js');
const implement = implementjs.default;
const { DeudaBusinessInterface } =  require('../../applicationport/input/interfaces');
const { deudaDaoImplement } =  require('../../adpaterinfraestructure/ouput/implements');
var  { Deuda, Cliente, Producto } = require('../entity/deuda'); 

let DeudaBusiness={
   
    async consultaDeuda(idCliente, idEmpresa){
      
       try {
        let deudasdao = await deudaDaoImplement.consultaDeuda(idCliente, idEmpresa);
        console.log(deudasdao[0]);
        if(deudasdao){
            //console.log(deudas.length);
            var deudas = new Array();
            for(i=0;i<deudasdao.length;i++){
                
                try {
                    //let object = JSON.parse(JSON.stringify(deudas[i]));
                    let object = deudasdao[i];
                    let cliente = new Cliente(object.cliente,object.nombres,null);
                    let producto = new Producto(object.producto,object.descripcion,object.precio);
                    let deuda = new Deuda(object.recibo,object.estado,object.deuda,cliente,producto);
                    //console.log(deuda);
                    deudas.push(deuda);
                } catch (error) {
                   console.log("error",error); 
                }
                
                //console.log("i:",i);
            }
        }
        return deudas;
        } catch (error) {
           throw error;
        }     
    }, 
    async pagarDeuda(deuda){
        try {
            let estado = await deudaDaoImplement.pagarDeuda(deuda);
            //console.log(deudas);
            return estado;
            } catch (error) {
               throw error;
            }
    },
    async registraDeuda(deuda){
        try {
            let estado = await deudaDaoImplement.registraDeuda(deuda);
            //console.log(deudas);
            return estado;

            } catch (error) {

               throw error;
            }
    },
    
    async extornarDeuda(deuda){
         try {
            let estado = await deudaDaoImplement.extornarDeuda(deuda);
            //console.log(deudas);
            return estado;
            } catch (error) {
               throw error;
            }
    },

    async eliminarDeuda(idFactura){
        try {
           let estado = await deudaDaoImplement.eliminarDeuda(idFactura);
           //console.log(deudas);
           return estado;
           } catch (error) {
              throw error;
           }
   }

}


let deudaBussinessImplement = implement(DeudaBusinessInterface)(DeudaBusiness); // throws an error!
/*deudaBussinessImplement.consultaDeuda().then(
    datos=>{console.log(datos);}
);*/
module.exports = { deudaBussinessImplement };