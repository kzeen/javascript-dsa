const LinkedList = require("../LinkedList/LinkedList");

class Stack {
    constructor() {
        this.stack = new LinkedList();
    }

    toString() {
        return this.stack.toString();
    }
}

module.exports = Stack;