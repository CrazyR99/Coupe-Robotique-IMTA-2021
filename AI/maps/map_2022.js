'use strict';

exports.map= {
    width: 3000,
    height: 2000,
    background: "",
    components: [
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