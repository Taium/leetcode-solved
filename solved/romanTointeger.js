var romanToInt = function (s) {
    // const I = 1;
    // const V = 5;
    // const X = 10;
    // const L = 50;
    // const C = 100;
    // const D = 500;
    // const M = 1000;
    let IV = 0;
    let IX = 0;
    let XL = 0;
    let XC = 0;
    let I = 0;
    let V = 0;
    let L = 0;
    let X = 0;
    let C = 0;
    let CD = 0;
    let CM = 0;
    let D = 0;
    let M = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] == "I" && s[i + 1] == "V") {
        IV = IV + 4;
        i++;
      }
      else if (s[i] == "I" && s[i + 1] == "X") {
        IX = IX + 9;
        i++;
      }
      else if (s[i] == "I") {
        I = I + 1;
      }
      else if (s[i] == "X" && s[i + 1] == "L") {
        XL = XL + 40;
        i++;
      }
      else if (s[i] == "X" && s[i + 1] == "C") {
        XC = XC + 90;
        i++;
      }
      else if (s[i] == "X") {
        X = X + 10;
      }
      else if (s[i] == "C" && s[i + 1] == "D") {
        CD = CD + 400;
        i++;
      }
      else if (s[i] == "C" && s[i + 1] == "M") {
        CM = CM + 900;
        i++;
      }
      else if (s[i] == "C") {
        C = C + 100;
      }
      else if (s[i] == "D") {
        D = D + 500;
      }
      else if (s[i] == "M") {
        M = M + 1000;
      }
      else if (s[i] == "L") {
        L = L + 50;
      }
      else if (s[i] == "V") {
        V = V + 5;
      }
    }
    console.log(I + X + V + L + C + D + M + XL + XC + IV + IX + CD + CM);
  };
  romanToInt("MCMXCIV");