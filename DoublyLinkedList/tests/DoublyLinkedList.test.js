const DoublyLinkedList = require('../DoublyLinkedList');

describe("DoublyLinkedList tests", () => {
    it("should create an empty DoublyLinkedList", () => {
        const doublylinkedlist = new DoublyLinkedList();

        expect(doublylinkedlist.head).toBeNull();
        expect(doublylinkedlist.tail).toBeNull();
        expect(doublylinkedlist.toString()).toBe('');
    })

    it("should append nodes to the end of the DoublyLinkedList", () => {
        const doublylinkedlist = new DoublyLinkedList();

        doublylinkedlist.append(5);
        expect(doublylinkedlist.head).toEqual(doublylinkedlist.tail);
        expect(doublylinkedlist.head.value).toBe(5);
        expect(doublylinkedlist.head.next).toBeNull();

        doublylinkedlist.append(6);
        expect(doublylinkedlist.head.value).toBe(5);
        expect(doublylinkedlist.tail.value).toBe(6);
        expect(doublylinkedlist.head.prev).toBeNull();
        expect(doublylinkedlist.head.next).toEqual(doublylinkedlist.tail);
        expect(doublylinkedlist.tail.prev.value).toBe(5);
        expect(doublylinkedlist.tail.next).toBeNull();

        doublylinkedlist.append(7);
        expect(doublylinkedlist.toString()).toBe('5,6,7');
    })
})