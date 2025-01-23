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

    it("should delete nodes from the DoublyLinkedList", () => {
        const doublylinkedlist = new DoublyLinkedList();

        expect(doublylinkedlist.delete(123)).toBeFalsy();

        doublylinkedlist.append(123);
        doublylinkedlist.prepend(321);
        doublylinkedlist.append(2);
        expect(doublylinkedlist.toString()).toBe('321,123,2');
        expect(doublylinkedlist.delete(123)).toBeTruthy();
        expect(doublylinkedlist.toString()).toBe('321,2');

        doublylinkedlist.append(10);
        expect(doublylinkedlist.delete(321)).toBeTruthy();
        expect(doublylinkedlist.head.value).toBe(2);
        expect(doublylinkedlist.toString()).toBe('2,10');
        expect(doublylinkedlist.delete(21)).toBeFalsy();

        doublylinkedlist.append(10);
        expect(doublylinkedlist.delete(10)).toBeTruthy();
        expect(doublylinkedlist.toString()).toBe('2,10');
        expect(doublylinkedlist.delete(10)).toBeTruthy();
        expect(doublylinkedlist.tail.value).toBe(2);
        expect(doublylinkedlist.toString()).toBe('2');
        expect(doublylinkedlist.delete(2)).toBeTruthy();
        expect(doublylinkedlist.head).toBeNull();
    })

    it("should traverse the DoublyLinkedList in reverse order", () => {
        const doublylinkedlist = new DoublyLinkedList();

        expect(doublylinkedlist.reverseTraverse()).toBe('');

        doublylinkedlist.append(1);
        expect(doublylinkedlist.reverseTraverse()).toBe('1');

        doublylinkedlist.append(2);
        doublylinkedlist.append(3);
        expect(doublylinkedlist.reverseTraverse()).toBe('3,2,1');

        doublylinkedlist.prepend(4);
        doublylinkedlist.prepend(5);
        doublylinkedlist.append(6);
        expect(doublylinkedlist.reverseTraverse()).toBe('6,3,2,1,4,5');

        expect(doublylinkedlist.delete(5)).toBeTruthy();
        expect(doublylinkedlist.reverseTraverse()).toBe('6,3,2,1,4');
        expect(doublylinkedlist.delete(2)).toBeTruthy();
        doublylinkedlist.append(10);
        expect(doublylinkedlist.reverseTraverse()).toBe('10,6,3,1,4');
    })
})