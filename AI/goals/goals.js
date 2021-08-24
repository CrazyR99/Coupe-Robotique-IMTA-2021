'use strict';

exports.goals= [
    {
        name: "Enable Lighthouse",
        x: 30,
        y: 30, //Wrong position just to show how to implement them.
        conditions: [
            {variable: "lightHouseActivated", value: false }
        ],
        actions: [
            {
                name: "Move",
                method: "moveToElement",
                element: "LightHouse",
                speed: 1,

            },
            {
                name: "Trigger",
                method: "triggerLightHouse",

            }
        ]
    },
]