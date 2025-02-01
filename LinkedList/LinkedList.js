const LinkedListNode = require("./LinkedListNode");

class LinkedList {
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


            if (currentNode.next === null) {
                return false;
            } else {
                if (currentNode.next === this.tail) {
                    currentNode.next = null;
                    this.tail = currentNode;
                } else {
                    currentNode.next = currentNode.next.next;
                }
                return true;
            }
        }
    }

    deleteHead() {
        if (this.head === null)
            return null;
        else {
            const deletedHead = this.head;

            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = deletedHead.next;
                deletedHead.next = null;
            }
            return deletedHead;
        }
    }

    traverse() {
        const arr = [];
        let currentNode = this.head;
        
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return arr.toString();
    }

    reverseTraverse() {
        const arr = [];

        if (this.tail === null)
            return arr.toString();
        let currentNode = this.tail;
        while (currentNode !== this.head) {
            let prevNode = this.head;
            while (prevNode.next !== currentNode) {
                prevNode = prevNode.next;
            }
            arr.push(currentNode.value);
            currentNode = prevNode;
        }
        arr.push(currentNode.value);

        return arr.toString();
    }
    
    toArray() {
        const LinkedListArr = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            LinkedListArr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return LinkedListArr;
    }

    toString() {
        return this.toArray().toString();
    }

}

module.exports = LinkedList;