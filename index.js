/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    const rows = new Array(Math.min(numRows, s.length)).fill('');
    let curRow = 0;
    let direction = false;
    for (let i = 0; i < s.length; i++) {
        rows[curRow] += s[i];
        if(curRow === 0 || curRow === numRows - 1) {
            direction = !direction;
        }
        curRow += direction ? 1 : -1;
    }
    console.log(rows)
    return rows.join('');


};
console.log(convert("PAYPALISHIRING", 3))