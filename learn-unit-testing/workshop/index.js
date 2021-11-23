// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

// Deep equality
// Write a searchParamsToObject function
// It should take a form-encoded string like "name=oliver&email=hello@oliverjam.es"
// It should return an object like { name: "oliver", email: "hello@oliverjam.es" }
function searchParamsToObject(str){
  let props = str.split('&');
  let obj = {};
  for (let prop of props) {
    const i = prop.indexOf('=');
    obj[prop.substring(0, i)] = prop.substring(i + 1, prop.length);
  }
  console.log(obj);
  return obj;
}

// Leap year challenge
// Write an isLeapYear function: it should take a year and either return an error message or a boolean
// years divisible by 100 are not leap years, and years divisible by 400 are leap years.

function isLeapYear(year){
  // error for negative number or string representation of negative number
  if (Number(year) < 0) {
    return `Error: ${year} is not a valid year`
  }
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 !== 0){
      return `Error: ${year} is not a leap year`
    }
    return true;
  }
  return `Error: enter a number`
}