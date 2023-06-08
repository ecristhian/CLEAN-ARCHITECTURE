const implementjs = require('implement-js')
const { Interface, type } = implementjs

const DeudaBusinessInterface = Interface('DeudaBusinessInterface')({
    registraDeuda:type('function'),
    consultaDeuda:type('function'),
    pagarDeuda:type('function'),
    extornarDeuda:type('function'),
    eliminarDeuda:type('function')
},{error: true});

module.exports={DeudaBusinessInterface};