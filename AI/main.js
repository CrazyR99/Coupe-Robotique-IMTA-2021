console.log("Hello World");



async function main(){
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