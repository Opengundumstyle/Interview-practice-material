/**
 Given the head of a linked list, remove the nth node from the end 
 of the list and return its head.
Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    
    let dummy = new ListNode(-Infinity)
    dummy.next = head; 
    let resultHead = dummy;
    let count = 0;
    let tail = head;
    
    while(count < n){
        count ++
         tail = tail.next;
        
    }
    
    let removedNode = head;
    let prev = dummy;
    
   while(tail){
       tail = tail.next;
       removedNode = removedNode.next
       prev = prev.next;
    }
    
    prev.next = removedNode.next;
    return resultHead.next;
    

};