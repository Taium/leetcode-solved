var searchInsert = function (nums, target) {
  const found = nums.includes(target);
  let index
  if (found) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        index = i;
      }

    }
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < target) {
        if (nums[i + 1] > target) {
          index = i + 1;
        } else {
          index = i + 1
        }

      }
      else {
        return i
      }

    }
  }
  return index;
};
console.log(searchInsert([1, 3, 5, 6], 2));
