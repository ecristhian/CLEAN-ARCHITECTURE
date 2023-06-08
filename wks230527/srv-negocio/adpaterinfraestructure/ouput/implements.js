const implementjs = require('implement-js');
const implement = implementjs.default;
const { DeudaDaoInterface } =  require('../../applicationport/ouput/interfaces');
const { Conexion } =  require('../../adpaterinfraestructure/config/conecction');
const { Deuda } = require('../../model/entity/deuda');

let DeudaDao={
    
      async consultaDeuda(idCliente, idEmpresa ){
        let conexion = new Conexion();
        let conn=null;
        try {
        conn = conexion.getConection();
        conn.connect();
        } catch (error) {
          throw(error);
        }

        try {
          let deudas = await conn.query('SELECT c.codigo as cliente,c.nombres as nombres, p.codigo as producto,p.descripcion as descripcion,p.precio as precio,cp.codigo as recibo,cp.monto as deuda,cp.estado as estado FROM esq_pagoservicios.TBL_CLIENTE c INNER JOIN esq_pagoservicios.TBL_CLIENTE_PRODUCTO cp on c.codigo = cp.cliente INNER JOIN esq_pagoservicios.TBL_PRODUCTO p on p.codigo = cp.producto and c.codigo = $1 and c.empresa = $2',[idCliente, idEmpresa]);
        conn.end();
        return deudas.rows;
        } catch (error) {
          conn.end();
          console.log("error consula ="+error);
          throw(error);
          
        }
        

      },
      async pagarDeuda(deuda){
        console.log(deuda.codigo + "-"+deuda.cliente.codigo+ "-"+deuda.producto.codigo );
        let conexion = new Conexion();
        let conn=null;
        try {
        conn = conexion.getConection();
        conn.connect();
        } catch (error) {
          throw(error);
        }
        try{
          let estado = await conn.query('UPDATE esq_pagoservicios.TBL_CLIENTE_PRODUCTO SET estado = \'1\' where codigo=$1 and cliente=$2 and producto=$3',[deuda.codigo,deuda.cliente.codigo,deuda.producto.codigo]);
          //console.log('informacion',estado.rowCount);
          conn.end();
          return estado.rowCount;
        }catch(error){
          conn.end();
          throw(error);
        }
        
      },
      async registraDeuda(deuda){
        console.log(deuda.monto + "-"+deuda.cliente.codigo+ "-"+deuda.producto.codigo );
        let conexion = new Conexion();
        let conn=null;
        try {
        conn = conexion.getConection();
        conn.connect();
        } catch (error) {
          throw(error);
        }
        try{
          let resultado = await conn.query('select esq_pagoservicios.fn_registrar_deuda($1,$2,$3);',[deuda.cliente.codigo,deuda.producto.codigo,deuda.monto]);
          //console.log('informacion',estado.rowCount);
          conn.end();
          return resultado.rows[0];
        }catch(error){
          conn.end();
          throw(error);
        }
       
      },
      async extornarDeuda(deuda){
        console.log(deuda.codigo + "-"+deuda.cliente.codigo+ "-"+deuda.producto.codigo );
        let conexion = new Conexion();
        let conn=null;
        try {
        conn = conexion.getConection();
        conn.connect();
        } catch (error) {
          throw(error);
        }
        try{
          let estado = await conn.query('UPDATE esq_pagoservicios.TBL_CLIENTE_PRODUCTO SET estado = \'0\' where codigo=$1 and cliente=$2 and producto=$3',[deuda.codigo,deuda.cliente.codigo,deuda.producto.codigo]);
          //console.log('informacion',estado.rowCount);
          conn.end();
          return estado.rowCount;
        }catch(error){
          conn.end();
          throw(error);
        }
      },
      async eliminarDeuda(idFactura){
        let conexion = new Conexion();
        let conn=null;
        try {
        conn = conexion.getConection();
        conn.connect();
        } catch (error) {
          throw(error);
        }
        try{
          let estado = await conn.query('DELETE from esq_pagoservicios.TBL_CLIENTE_PRODUCTO  where codigo=$1',[idFactura]);
          //console.log('informacion',estado.rowCount);
          conn.end();
          return estado.rowCount;
        }catch(error){
          conn.end();
          throw(error);
        }
      }
    
};

let deudaDaoImplement = implement(DeudaDaoInterface)(DeudaDao); // throws an error!
/* deudaDaoImplement.consultaDeuda().then(
    datos=>{console.log(datos);}
 );*/


/*deudaDaoImplement.extornarDeuda({codigo: 20,cliente:{codigo:1},producto:{codigo:1}}).then(
    datos=>{console.log(datos);}
);*/

module.exports = { deudaDaoImplement }