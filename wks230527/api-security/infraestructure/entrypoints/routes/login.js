var express = require('express');
//var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var SEED = require('../../config/config').SEED;
var cors = require('cors');
var HttpStatus = require('http-status-codes');
var StatusCodes = require('http-status-codes');
var { seguridadBusiness } = require('../../../businessdomain/usecase/seguridadbusiness');

var app = express();
app.use(cors());

app.post('/login', (req, res) => {
    var body = req.body;
     //console.log(req.body);

    seguridadBusiness.getUserByUsername(body)
    .then(
        (data)=>{
            
           
        console.log("respuesta",data);
        res.setHeader('access-control-expose-headers','Authorization');
        res.setHeader('Authorization',data.access_token);
        res.status(HttpStatus.OK)
        .json(data);
        },
        err=>{
            console.log("error",err);
        }            
        )
    .catch((err)=>{
        console.log("error2",err);
    });
});



module.exports = app;