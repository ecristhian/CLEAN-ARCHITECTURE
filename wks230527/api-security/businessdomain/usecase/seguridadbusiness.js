const implementjs = require('implement-js');
const implement = implementjs.default;
const { SeguridadBusinessInterface } =  require('./seguridadbusinessinterface');
const { seguridadDao } = require('../../infraestructure/dataproviders/seguridaddao');

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
	
	
}


let seguridadBusiness = implement(SeguridadBusinessInterface)(SeguridadBusiness);

module.exports = { seguridadBusiness };