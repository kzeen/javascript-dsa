const DoublyLinkedListNode = require('./DoublyLinkedListNode');

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(val) {
        const newNode = new DoublyLinkedListNode(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    prepend(val) {
        const newNode = new DoublyLinkedListNode(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    contains(val) {
        let currentNode = this.head;

        while (currentNode !== null && currentNode.value !== val)
            currentNode = currentNode.next;

        if (currentNode === null)
            return false;
        return true;
    }

    toArray() {
        const arr = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return arr;
    }

    toString() {
        return this.toArray().toString();
    }
}

module.exports = DoublyLinkedList;