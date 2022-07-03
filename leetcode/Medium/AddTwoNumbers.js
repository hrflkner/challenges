function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
    let head = new ListNode();
    let answerPointer = head;

    let carryTheOne = 0;

    while (l1 || l2 || carryTheOne) {
        let sum = (l1?.val || 0) + (l2?.val || 0) + carryTheOne;
        answerPointer.next = new ListNode(sum % 10);
        answerPointer = answerPointer.next;

        carryTheOne = Math.floor(sum / 10);

        l1 = l1?.next;
        l2 = l2?.next;
    }

    return head.next;
};

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2));
