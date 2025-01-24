const LinkedList = require("../LinkedList/LinkedList");

class Queue {
    constructor() {
        this.queue = new LinkedList();
    }

    toString() {
        return this.queue.toString();
    }
}

module.exports = Queue;