
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0 || matrix === []) {
    return [];
  }
  let array = matrix.map( function(element, index) {
    if (index % 2 !== 0) {
      return element.reverse();
    } else {
      return element;
    }
  });
  return array.flat();
};
