const { NotImplementedError } = require('../extensions/index.js');

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.front = null;
    this.back = null;
  }

  getUnderlyingList() {
   return;
  }

  enqueue(value) {
    
    
   return node;

  }
 
  dequeue() {
    return;
}
}
module.exports = {
  Queue
};
