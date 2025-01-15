import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(val) {
        const newNode = new LinkedListNode(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
    }

    prepend(val) {
        const newNode = new LinkedListNode(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    contains(head, val) {
        let currentNode = head;

        while (currentNode !== null && currentNode.value !== val)
            currentNode = currentNode.next;

        if (currentNode === null)
            return false;
        return true;
    }
}