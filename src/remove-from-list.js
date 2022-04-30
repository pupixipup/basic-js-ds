const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {
  if(l == null){
    return l;
}
while(l.value == k){
    l = l.next;
}
currentNode = l;
nodeNext = currentNode.next;
while(nodeNext != null){
    if (nodeNext.value == k && nodeNext.next && nodeNext.next.value == k) {
      nodeNext.next = nodeNext.next.next;
      currentNode.next = nodeNext.next;
    }
    else if(nodeNext.value == k){
        currentNode.next = nodeNext.next;
        // No more nodes, ie last node was to be removed

        if(currentNode.next == null)
            break;
    }
    currentNode = currentNode.next;
    nodeNext = currentNode.next;       
}
return l;
}

module.exports = {
  removeKFromList
};
