/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const arr = Array.from(String(x), Number);
    console.log(arr)
    let j
    let value
    if(arr.length<=1){
        return true
    }else{
         j = arr.length - 1
    }
  
    for (let i = 0; i < (arr.length - 1); i++) {
      if(isNaN(Number.isNaN(arr[i]))){  
        return false
      }
      
      else{
        if (arr[i] === arr[j]) {
        j--
        value = true
      } else {
        return false
  
      }
      }
      
    }
    return value
  };
  console.log(isPalindrome(-121))
  
  
  
  
  
  