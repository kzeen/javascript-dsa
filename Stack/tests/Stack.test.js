const Stack = require("../Stack");

describe("Stack tests", () => {
    it("should create an empty Stack", () => {
        const stack = new Stack();

        expect(stack.stack.head).toBeNull();
        expect(stack.stack.tail).toBeNull();
        expect(stack.toString()).toBe('');
    })
})