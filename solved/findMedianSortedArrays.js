var findMedianSortedArrays = function (nums1, nums2) {
    let sortedArray = nums1.concat(nums2).sort((a, b) => a - b);
    let length = sortedArray.length;
    let median = 0;
    if (length % 2 == 0) {
        median = (sortedArray[length / 2] + sortedArray[length / 2 - 1]) / 2;
    }
    else {
        median = sortedArray[Math.floor(length / 2)];
    }
    return median;
};
console.log(findMedianSortedArrays([1, 3, 4, 7], [2, 5, 9, 15])) // [1, 2, 3];
