const implementjs = require('implement-js');
const implement = implementjs.default;
const { DeudaBusinessInterface } =  require('../../interfaces/entrypoints/interfaces');
const { deudaDaoImplement } =  require('../../infraestructure/dataproviders/implements');
var  { Deuda, Cliente, Producto } = require('../entity/deuda'); 

let DeudaBusiness={
   
    async consultaDeuda(idCliente, idEmpresa){
      
       try {
         return await deudaDaoImplement.consultaDeuda(idCliente, idEmpresa);

        } catch (error) {
           console.log("error al invocar el dao");
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