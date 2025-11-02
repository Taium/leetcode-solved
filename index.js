/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const sArray = s.split('');
    let index = -1;
    for (let i = 0; i < sArray.length; i++) {
        if (sArray.indexOf(sArray[i]) === sArray.lastIndexOf(sArray[i])) {
            index = i;
            break;
        }}
    return index;
};

console.log(firstUniqChar("leetcode"))