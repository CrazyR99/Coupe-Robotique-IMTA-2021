'use strict';

const Robot = require('./robot')

module.exports = class Robot2022 extends Robot{
    constructor(app){
        super(app);
    }

    triggerLightHouse(parameters){
        this.app.logger.log("--> Triggering LightHouse"+JSON.stringify(parameters));
        return true;
    }
}