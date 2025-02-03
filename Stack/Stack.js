const LinkedList = require("../LinkedList/LinkedList");

class Stack {
    constructor() {
        this.stack = new LinkedList();
    }

    isEmpty() {
        return this.stack.head === null;
    }

    push(val) {
        this.stack.prepend(val);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stack.deleteHead();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stack.head.value;
    }

    toString() {
        return this.stack.toString();
    }
}

module.exports = Stack;