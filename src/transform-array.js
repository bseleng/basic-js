const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // --discard-next исключает следующий за ней элемент исходного массива из преобразованного массива.
  // --discard-prev исключает предшествующий ей элемент исходного массива из преобразованного массива.
  // --double-next удваивает следующий за ней элемент исходного массива в преобразованном массиве.
  // --double-prev удваивает предшествующий ей элемент исходного массива в преобразованном массиве.
  // Например:

  // transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]

  // transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]

  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let result = [];

  if (arr.indexOf("--discard-next") !== -1) {
    const start = arr.indexOf("--discard-next");
    result = arr.splice(start, 2);
    // return result
  }
  if (arr.indexOf("--discard-prev") !== -1) {
    const start = arr.indexOf("--discard-prev") - 1;
    result = arr.splice(start, 2);
    // return result
  }

  if (arr.indexOf("--double-next") !== -1) {
    const start = arr.indexOf("--double-next");
    result = arr.splice(start, 1);
    result[start] = result[start] * 2;
    // return result
  }

  if (arr.indexOf("--double-prev") !== -1) {
    const start = arr.indexOf("--double-prev");
    result = arr.splice(start, 1);
    result[start - 1] = result[start - 1] * 2;
    // return result
  }

  return result;
};
