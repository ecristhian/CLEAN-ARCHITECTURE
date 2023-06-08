const implementjs = require('implement-js');
const implement = implementjs.default;
const { SeguridadBusinessInterface } =  require('../../applicationport/input/securityusecaseinterface');
const { seguridadDao } = require('../../infraestructureadapter/ouput/securitydb');

let SeguridadBusiness={

    async getUserByUsername(in_username){
        let user=null;
        try {
       
            user = await seguridadDao.getUserByUsername(in_username);
            return user;
        } catch (error) {
            throw error;
        }
        
    },
	
	async createUser(in_username,in_password){
		 let user=null;
        try {
        user = await seguridadDao.createUser(in_username,in_password);
		  return user;
        } catch (error) {
            throw error;
        }
        
    },
    
    updatePassword(in_username,password){
        seguridadDao.updatePassword(in_username,password)
        .then((result)=>{
            return Promise.resolve(result);
         })
        .catch((error)=>{
            return Promise.reject(error);
         })
    }
}


let seguridadBusiness = implement(SeguridadBusinessInterface)(SeguridadBusiness);

module.exports = { seguridadBusiness };