var plusOne = function (digits) {
  const number = BigInt(digits.join("")) + BigInt(1);
  return number.toString().split("").map(Number);
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
