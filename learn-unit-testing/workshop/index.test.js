// Test makeUrl function
test('makeUrl should create a valid PokéAPI URL', () => {
    const actual = makeUrl('pikachu');
    const expected = "https://pokeapi.co/api/v2/pikachu";
    equal(actual, expected);
})

// Deep equality
// we cannot compare object with another object as they are not equal even if they contain the same key value pairs. We must instead check equality of key values (i.e obj.name === obj1.name).
test('searchParamsToObject should convert string to object', () => {
    const actual = searchParamsToObject("name=oliver&email=hello@oliverjam.es");
    const expected = {name: 'oliver', email: 'hello@oliverjam.es'}
    equal(actual.name, expected.name);
    equal(actual.email, expected.email);
})

// Leap year tests
test('isLeapYear should return true for leap years', () => {
    equal(isLeapYear(2020), true, 'the number 2020 is a leap year');
    equal(isLeapYear(2000), true, 'the number 2000 is a leap year');
    equal(isLeapYear(1996), true, 'the number 1996 is a leap year');
    equal(isLeapYear(1988), true, 'the number 1988 is a leap year');
})

test('isLeapYear should return true for strings that represent numbers', () => {
    const actual = isLeapYear('2020');
    const expected = true;
    equal(actual, expected, 'the string 2020 is a leap year');
})

test('isLeapYear should return an error for non-leap years', () => {
    const actual = isLeapYear(1900);
    const expected = 'Error: 1900 is not a leap year'
    equal(actual, expected, '1900 is not a leap year');
})

test('isLeapYear should return an error for negative integers', () => {
    const actual = isLeapYear(-2000);
    const expected = 'Error: -2000 is not a valid year';
    equal(actual, expected, '-2000 is not a valid year');
})

test('isLeapYear should return an error for strings that do not represent numbers', () => {
    const actual = isLeapYear('test');
    const expected = 'Error: enter a number';
    equal(actual, expected, 'Error: enter a number');
})