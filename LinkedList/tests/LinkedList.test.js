const LinkedList = require("../LinkedList");


function testAppend() {
    const test = new LinkedList();
    
    test.append(1);
    test.append(2)
    test.append(3)

    console.log(test)
}

function testPrepend() {
    const test = new LinkedList();

    test.prepend(1);
    test.prepend(2);
    test.prepend(3);

    console.log(test);
}

function testContains() {
    const test = new LinkedList();

    console.log(test.contains(1));

    test.append(1);
    test.prepend(2);
    test.prepend(123);
    test.append(123213);

    console.log(test.contains(10));
    console.log(test.contains(123));
}

function testDelete() {
    const test = new LinkedList();

    test.append(1);
    test.append(2);
    test.append(3);

    test.traverse()
    console.log(test.delete(3));
    test.traverse()
}

function testTraverse() {
    const test = new LinkedList();

    test.append(1);
    test.append(2);
    test.append(3);

    test.traverse();
}

function testReverseTraverse() {
    const test = new LinkedList();
    console.log(test.toArray().toString() === '');

    test.append(1);
    test.append(2);
    test.append(3);
    test.append(4);

    test.reverseTraverse();
    console.log(test.toArray().toString());
}

// testAppend();
// testPrepend();
// testContains();
// testDelete();
// testTraverse();
testReverseTraverse();