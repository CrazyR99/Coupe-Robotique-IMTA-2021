'use strict';

const Robot = require('./robot')

module.exports = class Robot2022 extends Robot{

    triggerLightHouse(parameters){
        console.log("--> Triggering LightHouse", parameters);
        return true;
    }
}