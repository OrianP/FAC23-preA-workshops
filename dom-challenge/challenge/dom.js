/* CHALLENGE 1
1. Find the second paragraph on the page
2. Add a class of "highlight", or
3. Remove the class of "highlight" if already present
e.g. "<p class="para">Hello</p>" -> "<p class="para highlight">Hello</p>"
*/
function toggleHighlight() {
  const secondP = document.querySelectorAll('p')[1];
  secondP.classList.toggle('highlight');
}

/* CHALLENGE 2
1. Take an array of strings as a parameter
1. Return a new `ul` containing an `li` containing a string for each element in the array
e.g. generateList(["hello", "world"]) -> <ul>
                                           <li>hello</li>
                                           <li>world</li>
                                          </ul>
*/
const generateList = (array) => {
  // create ul element
  const ul = document.createElement('ul');
  // iterate through array of strings and create an li with the string as textContent
  // append each new li to the ul 
  array.forEach((str) => {
    const li = document.createElement('li');
    li.textContent = str;
    ul.append(li);
  })
  return ul;
}

/* CHALLENGE 3a
1. Take a `textarea` element as a parameter
2. Count how many characters have been typed into it
3. If it contains > 140 characters set the `aria-invalid="true"` attribute
*/
function validateTweet(textarea) {
  if (textarea.textLength > 140) {
    textarea.setAttribute('aria-invalid', 'true');
  } else {
    textarea.removeAttribute('aria-invalid');
  }
}

/* CHALLENGE 3b
1. Find the textarea with ID "tweet"
2. Whenever a user types into it validate it using the previous function
*/
function validateTweetOnInput() {
  const tweet = document.querySelector('textarea#tweet');
  tweet.addEventListener('input', () => validateTweet(tweet));
}

/* CHALLENGE 4
1. Find all buttons with a classname of "toggle-button"
2. When each button is clicked show/hide the next sibling following the button
e.g. <button class="toggle-button">Toggle</button>
     <p>This should appear/disappear when the button is clicked</p>
*/
function setupToggleButtons() {
  const toggleBtns = document.querySelectorAll('.toggle-button');
  // add click event listener to every button
  // find next sibling to each button
  // if the sibling does not have a hidden attribute, set it with a value of true
  // else, remove the hidden attribute to reveal the element 
  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const sibling = btn.nextElementSibling;
      if (!sibling.getAttribute('hidden')) {
        sibling.setAttribute('hidden', 'true');
      } else {
        sibling.removeAttribute('hidden')
      }
    })  
  })
}