const LinkedListNode = require("../LinkedListNode");

describe("LinkedListNode tests", () => {
    it("should create list node with value", () => {
        const newNode = new LinkedListNode(1);
        
        expect(newNode.value).toBe(1);
        expect(newNode.next).toBeNull();
        expect(newNode.toString()).toBe("1");
    })

    it("should create linked nodes", () => {
        const node2 = new LinkedListNode(2);
        const node1 = new LinkedListNode(1, node2);

        expect(node1.value).toBe(1);
        expect(node1.next).toEqual(node2);
        expect(node1.toString()).toBe("1");

        expect(node2.value).toBe(2);
        expect(node2.next).toBeNull();
        expect(node2.toString()).toBe("2");
    })
})
