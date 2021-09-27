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
                parameters: {
                    speed: 1,
                    element: "LightHouse",
                },

            },
            {
                name: "Trigger",
                method: "triggerLightHouse",
                parameters: {},
            },
        ]
    },
]