const LinkedList = require("../LinkedList/LinkedList");

class Queue {
    constructor() {
        this.queue = new LinkedList();
    }

    isEmpty() {
        return this.queue.head === null;
    }

    enqueue(val) {
        this.queue.append(val);
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.queue.deleteHead();
        }
        return null;
    }

    peek() {
        if (!this.isEmpty()) 
            return this.queue.head.value;
        return null;
    }

    toString() {
        return this.queue.toString();
    }
}

module.exports = Queue;