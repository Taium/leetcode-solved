var plusOne = function (digits) {
    const number = BigInt(digits.join("")) + BigInt(1);
    return number.toString().split("").map(Number);
};
