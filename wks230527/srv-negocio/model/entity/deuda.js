const objectjs = require('object-js')
const  { Obj } = objectjs;
 
 class Cliente extends Obj {

  constructor(codigo,nombres,empresa) {
    super();
    this.codigo=codigo;
    this.nombres=nombres;
    this.empresa=empresa;
  }  
}

 class Producto extends Obj {

    constructor(codigo,descripcion,precio) {
      super();
      this.codigo=codigo;
      this.descripcion=descripcion;
      this.precio=precio;
    }  
  }

  class Deuda extends Obj {

    constructor(codigo,estado,monto, cliente,producto) {
      super();
      this.codigo=codigo;
      this.estado=estado;
      this.monto=monto;
      this.cliente=cliente;
      this.producto=producto;
  
    }  
  
    getCliente(){
      return this.cliente;
    }
  }
  
  
module.exports = { Cliente,Producto,Deuda };