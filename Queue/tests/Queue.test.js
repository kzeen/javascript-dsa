const Queue = require("../Queue");

describe("Queue Tests", () => {
    it("should create an empty Queue", () => {
        const queue = new Queue();

        expect(queue.queue.head).toBeNull();
        expect(queue.queue.tail).toBeNull();
        expect(queue.toString()).toBe('');
    })

    it("should enqueue nodes to the end of the queue", () => {
        const queue = new Queue();

        expect(queue.toString()).toBe('');
        queue.enqueue(21);
        expect(queue.toString()).toBe("21");

        queue.enqueue(2);
        queue.enqueue(10);
        expect(queue.toString()).toBe("21,2,10");
    })
})