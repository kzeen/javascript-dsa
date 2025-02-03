const LinkedList = require("../LinkedList/LinkedList");

class Stack {
    constructor() {
        this.stack = new LinkedList();
    }

    push(val) {
        this.stack.prepend(val);
    }

    toString() {
        return this.stack.toString();
    }
}

module.exports = Stack;