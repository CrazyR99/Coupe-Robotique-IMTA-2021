'use strict';
const Map = require('./map');

module.exports = class Map2022 extends Map {
    constructor(app){
        super(app);

        this.width = 3000
        this.height = 2000
        this.background = ""
        this.components = [


            //Borders
            {
                name: "top border",
                shape: {
                    type: "rectangle",
                    x: 0,
                    y: -22,
                    width: 3000,
                    height: 22,
                    color: "grey"
                }
            },
            {
                name: "bot border",
                shape: {
                    type: "rectangle",
                    x: 0,
                    y: 2978,
                    width: 3000,
                    height: 22,
                    color: "grey"
                }
            }
        ]
    }

}