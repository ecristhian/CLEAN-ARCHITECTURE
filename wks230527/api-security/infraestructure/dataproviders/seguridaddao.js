const axios = require('axios');
const implementjs = require('implement-js');
const implement = implementjs.default;
const { SeguridadDaoInterface } =  require('../../interfaces/dataproviders/seguridaddaointerface');
//var Usuario = require('../../businessdomain/entity/usuario2');




let SeguridadDao={
   async getUserByUsername(usuario){
    let url='http://localhost:8086/security/login';
    let optionsConfig={ headers: {
        'Content-Type': 'application/json' 
    }}
    

    try {
     let response = await axios.post(url, JSON.stringify(usuario),optionsConfig);

     console.log(response.status);
     console.log(response.data);
     return response.data;
    } catch (error) {
     console.log(error); 
     throw(error); 
    }

    },

   
}



let seguridadDao = implement(SeguridadDaoInterface)(SeguridadDao);
/*seguridadDao.updatePassword('admin4','123456');*/

module.exports = { seguridadDao };