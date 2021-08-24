console.log("Hello World");



async function main(){
    //Load map
    map = require('./maps/map_2022').map
    console.log(map)

    //Load goals
    goals = require('./goals/goals').goals
    console.log(goals)
}

main();