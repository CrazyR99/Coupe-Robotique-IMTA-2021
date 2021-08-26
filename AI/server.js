'use strict';

const express = require('express');
const httpServer = require('http').createServer();
const aedes = require('aedes')();
const ws = require('websocket-stream');

module.exports = class Server {
    constructor(app){
        this.app = app;
    }

    async init() {

        var expressApp = express();
        expressApp.use(express.static('./www'));
        expressApp.listen(8080);
        const port = 8081;
    
        ws.createServer({ server: httpServer }, aedes.handle);
    
        httpServer.listen(port, function () {
            console.log('websocket server listening on port ', port)
        });
    
        aedes.on('client', (client) => this.onClient(client));
    
        aedes.on('publish', (packet, client) => this.onPublish(packet,client));
    
        this.app.mqttServer = aedes;
    }

    onClient(client){
        console.log('Client Connected: \x1b[33m' + (client ? client.id : client) + '\x1b[0m', 'to broker', aedes.id)
    }

    onPublish(packet,client){
        //Parse input message
        let msg = {};
        if(!client) return;
        try{
            msg = JSON.parse(packet.payload);
        } catch(e){
            console.log("Failed to parse control message");
            msg = null;
        }
        if(msg === null) return;

        if("action" in msg && msg.action == "run"){
            if("intelligence" in this.app) this.app.intelligence.start();
        }
        //Select action
        
    }
}