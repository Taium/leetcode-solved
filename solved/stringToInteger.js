var myAtoi = function(s) {
    let result = 0;
    let newS = s.trim();
    let sign = 1;
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    if (newS[0] === "-" || newS[0] === "+") {
        sign = newS[0] === "-" ? -1 : 1;
        newS = newS.slice(1);
    }
    console.log("nnn", newS);
    for (let i = 0; i < newS.length; i++) {
        const char = newS[i];

        if (char >= '0' && char <= '9') {
            result = result * 10 + parseInt(char);

            if (sign * result > INT_MAX) return INT_MAX;
            if (sign * result < INT_MIN) return INT_MIN;
        } else {
            break;
        }
    }

    return result * sign;
};

console.log(myAtoi("    -0345i"));
