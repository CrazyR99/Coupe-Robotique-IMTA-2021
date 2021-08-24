'use strict';

module.exports = class Robot {
    constructor(){

    }

    run(action) {
        if(action.method in this){ return this[action.method](action.parameters);}
        else{
            console.log(action.method," method not declared");
            return false;
        }
    }

    moveToElement(parameters){
        console.log("--> Moving to ", parameters.element, "at speed ", parameters.speed);
        return true;
    }
}