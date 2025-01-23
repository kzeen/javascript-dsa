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

    it("should prepend nodes to the beginning of the DoublyLinkedList", () => {
        const doublylinkedlist = new DoublyLinkedList();

        doublylinkedlist.prepend(5);
        expect(doublylinkedlist.head).toEqual(doublylinkedlist.tail);
        expect(doublylinkedlist.head.value).toBe(5);
        expect(doublylinkedlist.head.next).toBeNull();        
        expect(doublylinkedlist.head.prev).toBeNull();

        doublylinkedlist.prepend(6);
        expect(doublylinkedlist.head.value).toBe(6);
        expect(doublylinkedlist.tail.value).toBe(5);
        expect(doublylinkedlist.head.prev).toBeNull();
        expect(doublylinkedlist.head.next).toEqual(doublylinkedlist.tail);
        expect(doublylinkedlist.tail.next).toBeNull();
        expect(doublylinkedlist.toString()).toBe('6,5');

        doublylinkedlist.append(7);
        doublylinkedlist.prepend(10);
        doublylinkedlist.prepend(8);
        expect(doublylinkedlist.toString()).toBe('8,10,6,5,7');
    })

    it("should return whether DoublyLinkedList contains value", () => {
        const doublylinkedlist = new DoublyLinkedList();

        expect(doublylinkedlist.contains(1)).toBeFalsy();

        doublylinkedlist.append(10);
        doublylinkedlist.prepend(2);
        expect(doublylinkedlist.contains(24)).toBeFalsy();
        expect(doublylinkedlist.contains(2)).toBeTruthy();
        expect(doublylinkedlist.contains(10)).toBeTruthy();

        doublylinkedlist.prepend(100);
        doublylinkedlist.append(100);
        expect(doublylinkedlist.contains(100)).toBeTruthy();
    })
})