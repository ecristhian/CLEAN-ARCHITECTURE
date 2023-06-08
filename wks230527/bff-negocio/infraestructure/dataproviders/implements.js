const http = require('http');
const axios = require('axios');
const implementjs = require('implement-js');
const implement = implementjs.default;
const { DeudaDaoInterface } =  require('../../interfaces/dataproviders/interface');
//const { Deuda } = require('../../businessdomain/entity/deuda');

let DeudaDao={

    async consultaDeuda(idCliente, idEmpresa ){
            let url='http://localhost:8089/deuda/consulta/idCliente/'+idCliente+'/idEmpresa/'+idEmpresa;
           //let url='http://localhost:8089/deuda/consulta/idCliente/+idCliente+/idEmpresa/'+idEmpresa;
           try {
            let response = await axios.get(url, { json: true });
    
            console.log(response.status);
            console.log(response.data);
            return response.data;
           } catch (error) {
            console.log(error); 
            throw(error); 
           }
           
    

              

      },

      async pagarDeuda(deuda){
        console.log(deuda.codigo + "-"+deuda.cliente.codigo+ "-"+deuda.producto.codigo );
        let deudapagar={"codigo":0,"cliente":{"codigo":0},"producto":{"codigo":0}};

        deudapagar.codigo=deuda.codigo;
        deudapagar.cliente.codigo=deuda.cliente.codigo;
        deudapagar.producto.codigo=deuda.producto.codigo;

        let url='http://localhost:8089/deuda/pagar';
        let optionsConfig={ headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer prueba'  
        }}
        

        try {
         let response = await axios.put(url, JSON.stringify(deudapagar),optionsConfig);
 
         console.log(response.status);
         console.log(response.data);
         return response.data;
        } catch (error) {
         console.log(error); 
         throw(error); 
        }
        
      },
      async registraDeuda(deuda){
        console.log(deuda.codigo + "-"+deuda.cliente.codigo+ "-"+deuda.producto.codigo );
        let deudaregistrar={"monto":0,"cliente":{"codigo":0},"producto":{"codigo":0}};

        deudaregistrar.monto=deuda.monto;
        deudaregistrar.cliente.codigo=deuda.cliente.codigo;
        deudaregistrar.producto.codigo=deuda.producto.codigo;

        let url='http://localhost:8089/deuda/registrar';
        let optionsConfig={ headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer prueba'  
        }}
        

        try {
         let response = await axios.post(url, JSON.stringify(deudaregistrar),optionsConfig);
 
         console.log(response.status);
         console.log(response.data);
         return response.data;
        } catch (error) {
         console.log(error); 
         throw(error); 
        }
       
      },

      async extornarDeuda(deuda){
        console.log(deuda.codigo + "-"+deuda.cliente.codigo+ "-"+deuda.producto.codigo );
        let deudapagar={"codigo":0,"cliente":{"codigo":0},"producto":{"codigo":0}};

        deudapagar.codigo=deuda.codigo;
        deudapagar.cliente.codigo=deuda.cliente.codigo;
        deudapagar.producto.codigo=deuda.producto.codigo;

        let url='http://localhost:8089/deuda/extornar';
        let optionsConfig={ headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer prueba'  
        }}
        

        try {
         let response = await axios.put(url, JSON.stringify(deudapagar),optionsConfig);
 
         console.log(response.status);
         console.log(response.data);
         return response.data;
        } catch (error) {
         console.log(error); 
         throw(error); 
        }
      },
      async eliminarDeuda(idFactura){
        let url='http://localhost:8089/deuda/eliminar/idFactura/'+idFactura;
        let optionsConfig={ headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer prueba'  
        }}
        
        try {
         let response = await axios.delete(url, optionsConfig);
 
         console.log(response.status);
         console.log(response.data);
         return response.data;
        } catch (error) {
         console.log(error); 
         throw(error); 
        }
        
       
      }
    
};

let deudaDaoImplement = implement(DeudaDaoInterface)(DeudaDao); // throws an error!
/*deudaDaoImplement.consultaDeuda(1,1).then(
    datos=>{console.log("datos que van a imprimirse = >>>>",datos);}
);
/*
console.log( "ejecutare1" );
async ()=>{
    console.log( "ejecutare" );
    try {
        const response = await deudaDaoImplement.consultaDeuda( 1, 1 );
        console.log( response );
      } catch ( err ) {
        console.error( err );
      }
};*/
/*deudaDaoImplement.extornarDeuda({codigo: 20,cliente:{codigo:1},producto:{codigo:1}}).then(
    datos=>{console.log(datos);}
);*/

module.exports = { deudaDaoImplement }