
const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  // remove line with error and write your code here
  let count = 0;
  array.forEach((subarray) => {
    let filtered = subarray.filter((el) => el === "^^");
    count += filtered.length;
  });

  return count;
};