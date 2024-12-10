/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function (l1, l2) {
//   const l1Rev = l1.reverse().join("")
//   const l2Rev = l2.reverse().join("")
//   const sum = Number(l1Rev) + Number(l2Rev)
//   const finalOutput = sum.toString().split('').map(Number)
//   return finalOutput
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// };
var addTwoNumbers = function (l1, l2) {
  const reverseList = (list) => {
    let arr = [];
    while (list) {
      arr.push(list.val);
      list = list.next;
    }
    return arr.reverse();
  };

  const l1Arr = reverseList(l1).join("");
  const l2Arr = reverseList(l2).join("");

  const sum = BigInt(l1Arr) + BigInt(l2Arr); // Use BigInt to handle large numbers
  const sumStr = sum.toString().split('').map(Number);

  const fValue = sumStr.reverse()
  // Create a linked list from the result
  let dummy = new ListNode(0);
  let current = dummy;
  for (const digit of fValue) {
    current.next = new ListNode(digit);
    current = current.next;
  }

  return dummy.next;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
