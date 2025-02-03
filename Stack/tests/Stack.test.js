const Stack = require("../Stack");

describe("Stack tests", () => {
    it("should create an empty Stack", () => {
        const stack = new Stack();

        expect(stack.stack.head).toBeNull();
        expect(stack.stack.tail).toBeNull();
        expect(stack.toString()).toBe('');
    })

    it("should push nodes to the top of the stack", () => {
        const stack = new Stack();

        expect(stack.toString()).toBe('');
        stack.push(21);
        expect(stack.toString()).toBe("21");

        stack.push(2);
        stack.push(10);
        expect(stack.toString()).toBe("10,2,21");
        expect(stack.stack.head.value).toBe(10);
    })

    it("should pop nodes from the top of the stack", () => {
        const stack = new Stack();

        expect(stack.pop()).toBeNull();

        stack.push(2);
        expect(stack.pop().value).toBe(2);

        stack.push(21);
        stack.push(2);
        stack.push(10);
        expect(stack.toString()).toBe("10,2,21");
        expect(stack.pop().value).toBe(10);
        expect(stack.toString()).toBe("2,21");
        expect(stack.pop().value).toBe(2);
        expect(stack.toString()).toBe("21");
        expect(stack.pop().value).toBe(21);
        expect(stack.toString()).toBe("");
    })

    it("should peek at the top of the stack", () => {
        const stack = new Stack();

        expect(stack.peek()).toBeNull();

        stack.push(2);
        expect(stack.peek()).toBe(2);

        stack.push(21);
        stack.push(2);
        stack.push(10);
        expect(stack.toString()).toBe("10,2,21,2");
        expect(stack.peek()).toBe(10);

        stack.pop();
        expect(stack.peek()).toBe(2);
    })
})