/**
 * @param {string[]} strs
 * @return {string}
 */
function calculateLength(len,strs) {
  let result = Math.floor(len / strs.length);
  for (let l = 0; l < result; l++) {
    value = value + strs[1][l];
  }
  return value;
}
var longestCommonPrefix = function (strs) {
  // debugger
  let value = "";
  let len = 0;
  let i = 0;
  if (strs.length > 1) {
    const jLength = Math.min(...strs.map((el) => el.length));

    for (let j = 0; j < jLength; j++) {
      for (let k = 0; k < strs.length; k++) {
        if (strs[i + k][j] != undefined) {
          if (strs[i][j] == strs[i + k][j]) {
            len = len + 1;
          } else {
            calculateLength(len,strs)
          }
        } else {
            calculateLength(len,strs)
        }
      }
    }
  } else {
    for (var x in strs) {
      value = strs[x];
      break;
    }
  }

  calculateLength(len,strs)
};
console.log(longestCommonPrefix(["ab", "a"]));
