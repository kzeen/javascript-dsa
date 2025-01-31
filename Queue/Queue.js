const LinkedList = require("../LinkedList/LinkedList");

class Queue {
    constructor() {
        this.queue = new LinkedList();
    }

    enqueue(val) {
        this.queue.append(val);
    }

    toString() {
        return this.queue.toString();
    }
}

module.exports = Queue;