const implementjs = require('implement-js');
const implement = implementjs.default;
const { SeguridadDaoInterface } =  require('../../applicationport/output/securitydbinterface');
var Usuario = require('../../domain/entity/usuario');
var dataSource = require('../config/connection');



let SeguridadDao={
   async getUserByUsername(in_username){
        try {
			console.log("SeguridadDao.getUserByUsername("+in_username+")");
            let results = await Usuario.find({ username: in_username });
            //console.log('results:',results);
            if(results.length==0){
                throw('usuario no encontrado');
            }
			
			
			
            return results[0];
           } catch (error) {
               throw(error);
           }  
    },

    updatePassword(in_username,in_password){

        //return Promise.resolve("actualizacÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­on exitosa -");
     Usuario.updateOne({'username':in_username},{
         $set:{password:in_password}
     })
     .then((result)=>{
         console.log("dao.updatePassword"+JSON.stringify(result));
         return Promise.resolve("actualizacion exitosa -"+result.ok);
        })
     .catch((err)=>{return Promise.reject("error al actulizar datos - "+err);})
     
    },
	
	//POST 
	async createUser(in_username,in_password){
	var usuario =  new Usuario({
       username:in_username,
       password:in_password
      });
	  try{
		 let saveUser = await usuario.save();
		 console.log("usuario guardado",saveUser);
		 return saveUser;
	  }catch (error) {
               throw(error);
      }  
	  
	  
	}
}



let seguridadDao = implement(SeguridadDaoInterface)(SeguridadDao);

module.exports = { seguridadDao };