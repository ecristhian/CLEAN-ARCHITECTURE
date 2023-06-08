var mongoose = require('mongoose');
var dbURL = require('./config').URL;

module.exports =function (){
    //console.log(dbURL);
    //mongoose.connect(dbURL);
    mongoose.connect(dbURL).catch(error =>{console.log("Mongoose default connection has occured "+error);});
    
    
    mongoose.connection.on('connected', function(){
        console.log("Mongoose default connection is open to ", dbURL);


    });

    mongoose.connection.on('error', function(err){
        console.log("Mongoose default connection has occured "+err);
    });

    
    mongoose.connection.on('disconnected', function(){
        console.log("Mongoose default connection is disconnected");
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log("Mongoose default connection is disconnected due to application termination");
            process.exit(0)
        });
    });

   
}