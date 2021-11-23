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

