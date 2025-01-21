class DoublyLinkedListNode {
    constructor(val, next = null, prev = null) {
        this.value = val;
        this.next = next;
        this.prev = prev;
    }

    toString() {
        return `${this.value}`;
    }
}

module.exports = DoublyLinkedListNode;