const implementjs = require('implement-js')
const { Interface, type } = implementjs;

const SeguridadBusinessInterface = Interface('SeguridadBusinessInterface')({
    getUserByUsername:type('function'),
	createUser:type('function'),
    updatePassword:type('function')
},{error: true});

module.exports={SeguridadBusinessInterface};