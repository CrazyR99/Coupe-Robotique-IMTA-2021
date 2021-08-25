
async function createServer() {

    var express = require('express');
    const httpServer = require('http').createServer();
    var expressApp = express();
    expressApp.use(express.static('./www'));
    expressApp.listen(8080);
    const aedes = require('aedes')()
    const port = 8081
    const ws = require('websocket-stream')

    ws.createServer({ server: httpServer }, aedes.handle)

    httpServer.listen(port, function () {
        console.log('websocket server listening on port ', port)
    })

    aedes.on('client', function (client) {
        console.log('Client Connected: \x1b[33m' + (client ? client.id : client) + '\x1b[0m', 'to broker', aedes.id)
    })


}

async function main(){

    await createServer();
    //Load map
    map = require('./maps/map_2022').map
    //console.log(map)

    //Load goals
    goals = require('./goals/goals').goals
    //console.log(goals)

    //Load Robot
    const Robot = require('./robots/robot_2022')
    let robot = new Robot()

    //Running goals
    for(const goal of goals){
        console.log("Running: ",goal.name);
        for(const action of goal.actions){
            let success = robot.run(action);
            console.log(success?"Done":"Failed");
        }
    }
}

main();