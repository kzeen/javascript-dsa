const LinkedList = require("../LinkedList/LinkedList");

class Queue {
    constructor() {
        this.queue = new LinkedList();
    }

    enqueue(val) {
        this.queue.append(val);
    }

    dequeue() {
        if (this.queue.head !== null) {
            const head_value = this.queue.head.value;
            this.queue.delete(head_value)
            return head_value;
        }
        return null;
    }

    toString() {
        return this.queue.toString();
    }
}

module.exports = Queue;