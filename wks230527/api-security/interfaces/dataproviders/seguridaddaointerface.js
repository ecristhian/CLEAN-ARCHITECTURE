const implementjs = require('implement-js')
const { Interface, type } = implementjs;

const SeguridadDaoInterface = Interface('SeguridadDaoInterface')({
    getUserByUsername:type('function')
},{error: true});

module.exports={SeguridadDaoInterface};