// queue
class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    enQueue(val) {
        let newNode = new Node();
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = null
            newNode.val = val;
            this.length++;
            return this;
        } else {
            this.tail.next = newNode;
            newNode.next = null;
            newNode.val = val;
            this.tail = newNode;
            this.length++;
            return this;
        }
    }
    deQueue() {
        if (!this.head) {
            return false;
        } else {
            let newHead = this.head.next;
            this.head.next = null;
            this.head = newHead;
            this.length--;
            return this;
        }
    }
}

// queue instance
const q = new Queue();

q.enQueue(0);
q.enQueue(1);
q.enQueue(2);
q.deQueue()