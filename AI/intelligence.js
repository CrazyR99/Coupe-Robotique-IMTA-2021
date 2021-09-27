'use strict';

module.exports = class Intelligence {
    constructor(app){
        this.app = app;
    }

    start() {
        //Load map
        const Map = require('./maps/map_2021');
        this.map = new Map(this.app);
        this.map.init();
        this.app.logger.log("Map Loaded");

        //Load goals
        this.goals = require('./goals/goals').goals;
        this.app.logger.log("Goals Loaded");

        //Load Robot
        const Robot = require('./robots/robot_2022');
        this.app.logger.log("Robot Loaded");
        let robot = new Robot(this.app);

        //Running goals
        for(const goal of this.goals){
            this.app.logger.log("Running: "+goal.name)
            for(const action of goal.actions){
                let success = robot.run(action);
                this.app.logger.log(success?"Done":"Failed");
            }
        }
    }
}