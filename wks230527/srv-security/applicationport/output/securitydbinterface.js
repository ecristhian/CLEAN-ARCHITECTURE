const implementjs = require('implement-js')
const { Interface, type } = implementjs;

const SeguridadDaoInterface = Interface('SeguridadDaoInterface')({
    getUserByUsername:type('function'),
	createUser:type('function'),
    updatePassword:type('function')
},{error: true});

module.exports={SeguridadDaoInterface};