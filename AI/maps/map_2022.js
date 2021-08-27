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
                    y: 1978,
                    width: 3000,
                    height: 22,
                    color: "grey"
                }
            },
            {
                name: "left border",
                shape: {
                    type: "rectangle",
                    x: -22,
                    y: 0,
                    width: 22,
                    height: 1978,
                    color: "grey"
                }
            },
            {
                name: "right border",
                shape: {
                    type: "rectangle",
                    x: 3000,
                    y: 0,
                    width: 22,
                    height: 1978,
                    color: "grey"
                }
            },
            
        ]
    }

}