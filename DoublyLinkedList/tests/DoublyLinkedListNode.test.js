const DoublyLinkedListNode = require('../DoublyLinkedListNode');

describe("DoublyLinkedListNode tests", () => {
    it("should create a DoublyLinkedListNode with a value", () => {
        const node = new DoublyLinkedListNode(5);

        expect(node.value).toBe(5);
        expect(node.next).toBeNull();
        expect(node.prev).toBeNull();
        expect(node.toString()).toBe('5');
    })

    it("should create doubly linked nodes", () => {
        const node1 = new DoublyLinkedListNode(1);
        const node2 = new DoublyLinkedListNode(2);
        const node3 = new DoublyLinkedListNode(3);

        node1.next = node2;
        node2.prev = node1;
        node1.prev = node3;
        node3.next = node1;

        expect(node1.next).toEqual(node2);
        expect(node2.next).toBeNull();
        expect(node3.next).toEqual(node1);
        expect(node1.prev).toEqual(node3);
        expect(node2.prev).toEqual(node1);
        expect(node3.prev).toBeNull();
    })
})