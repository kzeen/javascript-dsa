const LinkedList = require("../LinkedList");

describe("LinkedList tests", () => {
    it("should create an empty LinkedList", () => {
        const linkedlist = new LinkedList();

        expect(linkedlist.head).toBeNull();
        expect(linkedlist.tail).toBeNull();
        expect(linkedlist.toString()).toBe('');
    })

    it("should add nodes to the end of the LinkedList", () => {
        const linkedlist = new LinkedList();

        linkedlist.append(1);
        expect(linkedlist.head).toBeDefined();
        expect(linkedlist.tail).toBeDefined();
        expect(linkedlist.head).toEqual(linkedlist.tail);
        expect(linkedlist.toString()).toBe('1');

        linkedlist.append(2);
        expect(linkedlist.head.value).toBe(1);
        expect(linkedlist.head.next).toBe(linkedlist.tail);
        expect(linkedlist.tail.value).toBe(2);
        expect(linkedlist.tail.next).toBeNull();
        expect(linkedlist.head).not.toEqual(linkedlist.tail);
        expect(linkedlist.toString()).toBe('1,2');
    })

    it("should add nodes to the beginning of the LinkedList", () => {
        const linkedlist = new LinkedList();

        linkedlist.prepend(1);
        expect(linkedlist.toString()).toBe('1');
        expect(linkedlist.head.next).toBeNull();

        linkedlist.prepend(2);
        expect(linkedlist.head.value).toBe(2);
        expect(linkedlist.tail.value).toBe(1);
        expect(linkedlist.head.next).toEqual(linkedlist.tail);
        expect(linkedlist.toString()).toBe('2,1');

        linkedlist.prepend(3);
        linkedlist.append(4);
        linkedlist.prepend(5)
        expect(linkedlist.toString()).toBe('5,3,2,1,4');
    })

    it("should return whether LinkedList contains value", () => {
        const linkedlist = new LinkedList();

        expect(linkedlist.contains(1)).toBeFalsy();

        linkedlist.append(10);
        linkedlist.prepend(2);
        expect(linkedlist.contains(24)).toBeFalsy();
        expect(linkedlist.contains(2)).toBeTruthy();
        expect(linkedlist.contains(10)).toBeTruthy();

        linkedlist.prepend(100);
        linkedlist.append(100);
        expect(linkedlist.contains(100)).toBeTruthy();
    })

    it("should delete node from LinkedList", () => {
        const linkedlist = new LinkedList();

        expect(linkedlist.delete(123)).toBeFalsy();

        linkedlist.append(123);
        linkedlist.prepend(321);
        linkedlist.append(2);
        expect(linkedlist.toString()).toBe('321,123,2');
        expect(linkedlist.delete(123)).toBeTruthy();
        expect(linkedlist.toString()).toBe('321,2');

        linkedlist.append(10);
        expect(linkedlist.delete(321)).toBeTruthy();
        expect(linkedlist.head.value).toBe(2);
        expect(linkedlist.toString()).toBe('2,10');
        expect(linkedlist.delete(21)).toBeFalsy();

        linkedlist.append(10);
        expect(linkedlist.delete(10)).toBeTruthy();
        expect(linkedlist.toString()).toBe('2,10');
        expect(linkedlist.delete(10)).toBeTruthy();
        expect(linkedlist.tail.value).toBe(2);
        expect(linkedlist.toString()).toBe('2');
        expect(linkedlist.delete(2)).toBeTruthy();
        expect(linkedlist.head).toBeNull();
    })

    it("should traverse the LinkedList in order", () => {
        const linkedlist = new LinkedList();

        expect(linkedlist.traverse()).toBe('');

        linkedlist.append(1);
        expect(linkedlist.traverse()).toBe('1');

        linkedlist.append(2);
        linkedlist.append(3);
        expect(linkedlist.traverse()).toBe('1,2,3');

        linkedlist.prepend(4);
        linkedlist.prepend(5);
        linkedlist.append(6);
        expect(linkedlist.traverse()).toBe('5,4,1,2,3,6');

        expect(linkedlist.delete(5)).toBeTruthy();
        expect(linkedlist.traverse()).toBe('4,1,2,3,6');
        expect(linkedlist.delete(2)).toBeTruthy();
        linkedlist.append(10);
        expect(linkedlist.traverse()).toBe('4,1,3,6,10');
    })

    it("should traverse the LinkedList in reverse order", () => {
        const linkedlist = new LinkedList();

        expect(linkedlist.reverseTraverse()).toBe('');

        linkedlist.append(1);
        expect(linkedlist.reverseTraverse()).toBe('1');

        linkedlist.append(2);
        linkedlist.append(3);
        expect(linkedlist.reverseTraverse()).toBe('3,2,1');

        linkedlist.prepend(4);
        linkedlist.prepend(5);
        linkedlist.append(6);
        expect(linkedlist.reverseTraverse()).toBe('6,3,2,1,4,5');

        expect(linkedlist.delete(5)).toBeTruthy();
        expect(linkedlist.reverseTraverse()).toBe('6,3,2,1,4');
        expect(linkedlist.delete(2)).toBeTruthy();
        linkedlist.append(10);
        expect(linkedlist.reverseTraverse()).toBe('10,6,3,1,4');
    })
})