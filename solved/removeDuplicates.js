var removeDuplicates = function (nums) {
    console.log(Math.max(...nums));
    const neArr = [...nums];
    console.log("duplicate", neArr);

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                console.log("duplicate", nums[j]);
                neArr.push(nums[j]);


            }
        }
    }
    console.log("neArr", neArr);
};
removeDuplicates([1, 2, 2, 3, 3, 3, 3, 4]);

// let removeDuplicates = function (nums) {
//     let k = 0
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] !== nums[i + 1]) {
//         nums[k] = nums[i]
//         k++
//       }
//     }
//     return k

//   };
//   console.log(removeDuplicates([0, 0, 1, 1, 2, 3]))
