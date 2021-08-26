'use strict';

module.exports = class Robot {
    constructor(app){
        this.app = app;
    }

    run(action) {
        if(action.method in this){ return this[action.method](action.parameters);}
        else{
            this.app.logger.log(action.method+" method not declared")
            return false;
        }
    }

    moveToElement(parameters){
        this.app.logger.log("--> Moving to "+parameters.element+"at speed "+parameters.speed);
        return true;
    }
}