const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    return false;
  }
  let filtered = arr.filter((element) => typeof element === "string");
  let result = [];
  filtered.forEach((element) => {
    element = element.trim().toUpperCase()[0];
    result.push(element);
  });
  return result.sort().join("");
};
