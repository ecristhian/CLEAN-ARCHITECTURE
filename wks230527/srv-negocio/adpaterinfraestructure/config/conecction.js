const { Client } = require('pg');
const objectjs = require('object-js')
const  { Obj } = objectjs;
var POSTGRES_DB = require('./config').POSTGRES_DB;
var POSTGRES_USER = require('./config').POSTGRES_USER;
var POSTGRES_PASWROD = require('./config').POSTGRES_PASWROD;
var POSTGRES_HOST = require('./config').POSTGRES_HOST;

class Conexion extends Obj {

    constructor() {
        super();
    }
    
    getConection(){
        const parametrosdb={
            database:POSTGRES_DB,
            host: POSTGRES_HOST,
            port: 5432,
            user: POSTGRES_USER,
            password: POSTGRES_PASWROD,
          };
          const conn = new Client(parametrosdb);
        return conn;
    }

    
}

/*let conn=new Conexion();
console.log(conn.getConection());
console.log("se conecto a al db");
*/
module.exports = { Conexion };