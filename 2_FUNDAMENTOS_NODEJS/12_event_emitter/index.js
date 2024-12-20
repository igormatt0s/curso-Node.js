const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
    console.log("Durante o evento");
})

console.log("Antes do evento");

eventEmitter.emit("start");

console.log("Depois do evento")