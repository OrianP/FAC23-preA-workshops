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

searchParamsToObject("name=oliver&email=hello@oliverjam.es");
