const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
    const turns = 2 ** disksNumber - 1
    const speed = turnsSpeed / 60 / 60
    const seconds = Math.floor(turns/speed)
    return { turns: turns, seconds:seconds}
};
