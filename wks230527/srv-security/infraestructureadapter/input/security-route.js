var express = require('express');
//var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var SEED = require('../config/config').SEED;
var cors = require('cors');
var HttpStatus = require('http-status-codes');
var StatusCodes = require('http-status-codes');
var { seguridadBusiness } = require('../../domain/usecase/securityusecase');

var app = express();
app.use(cors());

app.post('/login', (req, res) => {
    var body = req.body;
    // console.log(req.body);

    seguridadBusiness.getUserByUsername(body.username)
    .then(
        (user)=>{
            
            //console.log(`DATOS DE RETONOR : ${body.password}=${user.password}`);
            if (body.password!=user.password) {
                console.log("se valido el user and password");
                return res.status(HttpStatus.StatusCodes.UNAUTHORIZED).json({
                    ok: false,
                    mensaje: 'Credenciales incorrectas - password',
                    errors: err
                });
            }
            //console.log("Vamos a generar token");
            var token = jwt.sign({ usuario: user },SEED, { expiresIn: 14400 }); // 4 horas

            res.setHeader('access-control-expose-headers','Authorization');
            res.setHeader('Authorization',`Bearer ${token}`);

          
            return res.status(HttpStatus.StatusCodes.OK).json({
                ok: true,
                access_token: `Bearer ${token}`
            });
        },
        err=>{
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
                ok: false,
                mensaje: 'Error al buscar usuario',
                errors: err
            });
        }            
        )
    .catch((err)=>{
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
            ok: false,
            mensaje: 'Error al buscar usuario',
            errors: err
        });
    });
});

app.post('/registrar', (req, res) => {
    var body = req.body;


    seguridadBusiness.createUser(body.username,body.password)
    .then(
        (user)=>{
            
                   
            return res.status(HttpStatus.StatusCodes.OK).json({
                ok: true,
                descripcion: `Proceso conforme`
            });
        },
        err=>{
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
                ok: false,
                mensaje: 'Error al registrar usuario',
                errors: err
            });
        }            
        )
    .catch((err)=>{
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
            ok: false,
            mensaje: 'Error al registrar usuario',
            errors: err
        });
    });
});

app.put('/actualizar', (req, res) => {
    var body = req.body;


    seguridadBusiness.updatePassword(body.username,body.password)
    .then(
        (user)=>{
            
                   
            return res.status(HttpStatus.StatusCodes.OK).json({
                ok: true,
                descripcion: `Proceso conforme`
            });
        },
        err=>{
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
                ok: false,
                mensaje: 'Error al registrar usuario',
                errors: err
            });
        }            
        )
    .catch((err)=>{
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
            ok: false,
            mensaje: 'Error al registrar usuario',
            errors: err
        });
    });
});

module.exports = app;