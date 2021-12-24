/*
Given a linked list, swap every two adjacent nodes and return its head.
 You must solve the problem without modifying the values in the list's 
 nodes (i.e., only nodes themselves may be changed.)

Example 1:

Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:

Input: head = []
Output: []

Example 3:

Input: head = [1]
Output: [1]
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    const dummy = new ListNode();
    dummy.next = head;
    let temp =dummy;
    while(temp.next && temp.next.next){
          let node1 = temp.next;
          let node2 = temp.next.next;
          temp.next = node2;
          node1.next = node2.next;
          node2.next = node1;
          temp = node1;
          }
    return dummy.next;
};