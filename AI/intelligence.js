'use strict';

module.exports = class Intelligence {
    constructor(app){
        this.app = app;
    }

    start() {
            //Load map
        let map = require('./maps/map_2022').map;
        this.app.logger.log("Map Loaded");

        //Load goals
        let goals = require('./goals/goals').goals;
        this.app.logger.log("Goals Loaded");

        //Load Robot
        const Robot = require('./robots/robot_2022');
        this.app.logger.log("Robot Loaded");
        let robot = new Robot(this.app);

        //Running goals
        for(const goal of goals){
            this.app.logger.log("Running: "+goal.name)
            for(const action of goal.actions){
                let success = robot.run(action);
                this.app.logger.log(success?"Done":"Failed");
            }
        }
    }
}