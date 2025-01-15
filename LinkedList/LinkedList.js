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

    contains(val) {
        let currentNode = this.head;

        while (currentNode !== null && currentNode.value !== val)
            currentNode = currentNode.next;

        if (currentNode === null)
            return false;
        return true;
    }


    delete(val) {
        if (this.head === null)
            return false;
        else {
            let currentNode = this.head;

            // First element to delete
            if (currentNode.value === val) {
                if (this.head === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else {
                    this.head = currentNode.next;
                    currentNode.next = null;
                }
                return true;
            }

            // Middle or last element to delete
            while (currentNode.next !== null && currentNode.next.value !== val) {
                currentNode = currentNode.next
            }

            if (currentNode.next.value === val) {
                if (currentNode.next === this.tail) {
                    currentNode.next = null;
                    this.tail = currentNode;
                } else {
                    currentNode.next = currentNode.next.next;
                }
                return true;
            } else {
                return false;
            }
        }
    }

    traverse() {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

}