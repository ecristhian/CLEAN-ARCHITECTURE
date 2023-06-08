const objectjs = require('object-js')
const  { Obj } = objectjs;
 
 class Usuario extends Obj {

  constructor(username,password) {
    super();
    this.usernam=username;
    this.password=password;
  }  
}

module.exports = { Usuario };