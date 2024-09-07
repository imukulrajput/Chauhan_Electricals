const { v4: uuid } = require('uuid');

const categories = {
    "data": [
        { id: uuid(), category: "Fans" },
        { id: uuid(), category: "Heaters" },
        { id: uuid(), category: "Wires" },
        { id: uuid(), category: "Switches" },
        { id: uuid(), category: "Lighting" },
        { id: uuid(), category: "Sockets" },
        { id: uuid(), category: "Batteries" },
        { id: uuid(), category: "Appliances" },
        { id: uuid(), category: "Voltage Stabilizers" }
    ]
};

module.exports = categories;
