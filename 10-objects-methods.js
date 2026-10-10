let robot = {
    name: "MechaBot",
    batteryLevel: 95,
    powerOn: function() {
        return this.name + " is online with " + this.batteryLevel + "% battery.";
    }
};

console.log(robot.powerOn());
