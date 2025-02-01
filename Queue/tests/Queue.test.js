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

    it("should dequeue nodes from the front of the queue", () => {
        const queue = new Queue();

        expect(queue.dequeue()).toBeNull();

        queue.enqueue(21);
        queue.enqueue(2);
        queue.enqueue(10);
        expect(queue.toString()).toBe("21,2,10");
        expect(queue.dequeue().value).toBe(21);
        expect(queue.toString()).toBe("2,10");

        queue.enqueue(200);
        queue.enqueue(101);
        expect(queue.toString()).toBe("2,10,200,101");
        expect(queue.dequeue().value).toBe(2);
        expect(queue.toString()).toBe("10,200,101");

        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.toString()).toBe("");
    })

    it("should peek at the front of the queue", () => {
        const queue = new Queue();

        expect(queue.peek()).toBeNull();

        queue.enqueue(21);
        queue.enqueue(2);
        queue.enqueue(10);
        expect(queue.toString()).toBe("21,2,10");
        expect(queue.peek()).toBe(21);

        queue.dequeue();
        expect(queue.peek()).toBe(2);
        expect(queue.toString()).toBe("2,10");

        queue.dequeue();
        queue.dequeue();
        expect(queue.peek()).toBeNull();
        expect(queue.toString()).toBe("");
    })
})