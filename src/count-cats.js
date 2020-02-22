module.exports = function countCats(backyard) {
  let arr = backyard.flat();
  let number = arr.filter(item => item == '^^');
  return number.length;
}
