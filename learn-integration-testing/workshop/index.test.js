// Tests for calculate function
// one test for each branch of the switch statement

// case +
test('Calculate should add two numbers', () => {
    equal(calculate(10, '+', 5), 15);
});

// case -
test('Calculate should subtract two numbers', () => {
    equal(calculate(10, '-', 5), 5);
});

// case *
test('Calculate should multiply two numbers', () => {
    equal(calculate(10, '*', 5), 50);
});

// case /
test('Calculate should divide two numbers', () => {
    equal(calculate(10, '/', 5), 2);
});

test('Calculate should handle numbers passed as strings', () => {
    equal(calculate('10', '+', '5'), 15);
});