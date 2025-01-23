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

    delete(val) {
        // Empty DoublyLinkedList
        if (this.head === null) {
            return false;
        }

        // Deleting first element
        if (this.head.value === val) {
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev.next = null;
                this.head.prev = null;
            }
            return true;
        }

        // Deleting middle or last element or none
        let currentNode = this.head;

        while (currentNode !== null && currentNode.value !== val) {
            currentNode = currentNode.next;
        }

        if (currentNode === null) {
            return false;
        }

        currentNode.prev.next = currentNode.next;
        if (currentNode === this.tail) {
            this.tail = currentNode.prev;
        } else {
            currentNode.next.prev = currentNode.prev;
        }

        return true;
    }

    reverseTraverse() {
        const arr = [];

        let currentNode = this.tail;

        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.prev;
        }

        return arr.toString();
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