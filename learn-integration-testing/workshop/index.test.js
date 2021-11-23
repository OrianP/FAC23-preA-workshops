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

// Tests for UI
// Check that the calculator calculates the result of user input and updates the page

test('Calculator performs division and updates page', () => {
    // get all inputs and submit button
    const inputA = document.querySelector('input[name="a"]');
    const inputB = document.querySelector('input[name="b"]');
    const select = document.querySelector('select');
    const submit = document.querySelector('button[type="submit"]')
    // enter numbers
    inputA.value = 10;
    inputB.value = 5;
    // choose select option
    select.selectedIndex = 3;
    // click submit button
    submit.click();
    // check if result is equal to expected
    equal(result.textContent, '2');
    // clear result display
    result.textContent = '';
}) 