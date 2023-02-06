var isValid = function (s) {
    let value = [];
    const top = stack[stack.length - 1];
    for (let i = 0; i < s.length; i++) {
      if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
        value.push(s[i]);
      } else if (s[i] == ")" && top == "(") {
        value.pop();
      } else if (s[i] == "}" && top == "{") {
        value.pop();
      } else if (s[i] == "]" && top == "[") {
        value.pop();
      }
      else{
        return false
      }
    }
    if (value.length == 0) {
      return true
    } else {
      return false;
    }
  };
  console.log(isValid("([)]"));
  