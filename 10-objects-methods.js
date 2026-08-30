// 10-objects-methods.js: Objects with functions inside them

let robot = {
    name: "MechaBot",
    batteryLevel: 95,
    // Method: A function inside an object
    powerOn: function() {
        return this.name + " is online with " + this.batteryLevel + "% battery.";
    }
};

console.log(robot.powerOn());