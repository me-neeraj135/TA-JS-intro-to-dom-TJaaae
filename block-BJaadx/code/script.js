// 1. Change the title of the page to `Hello AltCampus!`
let title = document.title;
document.title = `Hello AltCampus`;

console.log(title);
// 2. Select the element using the children property:
let h2 = document.body.children[4];
console.log(h2);
//    - Select the `h1` element and change the value to `Learning DOM`
let h1 = document.body.querySelector(`h1`);
h1.innerText = `Learning DOM`;

//    - Select the first `li` element inside the `ul` with class `topics` and change the innerText to `all about document`
let li = document.body.children[5].children[0];
li.innerText = `all about document`;

//    - Select the input element with name `email`
let input = document.getElementById(`email`);
// 3. Log the number (using console.log) of children of all the `li` element inside the ul with class `topics`
let numberOfLi = document.body
  .querySelector(`ul`)
  .querySelectorAll(`li`).length;
// 4. Select the first input using the `type` selector and store them in variable named `emailInput`
let emailInput = document.body.querySelector(`input`);
// 5. Select the ul element using class selector and store in `topics`
let topics = document.body.querySelector(`.topics`);
// 6. Select the first label element and store in `label`
// let label = document.querySelector(`label`);
// 7. Select the input of type `checkbox` with the `id` selector and store in `inputCheckbox`
let inputCheckbox = document.querySelector(`#remember`);
// 8. Select the input of type password using Attribute selectors. (eg: input[type="text"]) and store in `password`
let password = document.querySelector(`input[type="password"]`);
// 9. Select the input using the placeholder attribute selector with value `password` and store in `attrPassword`
let attrPassword = document.querySelector(`input[placeholder="password"]`);
// 10. Select all the `li` element and store in `allTopics`
let allTopics = document.querySelectorAll(`li`);

// 11. Select all the input element of any type and store in `allInput`
let allInput = document.querySelectorAll(`input`);
// 12. Use forEach to console the `innerText` property of all the li element in `allTopics` variable.
allTopics.forEach(function name(ele) {
  console.log(ele.innerText);
});
// 13. Select all the elements with class `list` and store in variable `listOfSelectedTopics`
let listOfSelectedTopics = document.querySelectorAll(`.list`);
// 14. Select the first li element inside the `ul` element using `>` (direct child) and store in `firstLi`
let firstLi = document.querySelector(`ul`).firstElementChild;
// 15. Select all the img element and log the number of element saying `The total number of img element is ---`
let allImg = document.querySelectorAll(`img`).length;
console.log(`The total number of img element is ---${allImg}`);
// 16. Select all the `p` element and store in `allPElement`
let allPElement = document.querySelectorAll(`p`);
// 17. Select all the buttons and log the count of buttons.
let fieldset = document.querySelector(`fieldset`);
let button = fieldset.lastElementChild;

// 18. Select all the `label` element and log the count.
let label = document.querySelectorAll(`label`).length;
console.log(`count of labels are ${label} `);
// 19. Select all the elements with `id` of `test`
let testId = document.querySelectorAll(`#test`);
// 20. Select the first element with id `test` using `getElementById`
let firstTestId = document.getElementById(`test`);
// 21. Select the parent element of the element stored in `topics` variable (#5) and log the element.
let firstTopics = topics.parentElement;
// 22. Select the next element sibling of the element stored in `topics` variable (#5) and log the element.
let topicsNextSib = topics.nextElementSibling;
console.log(topicsNextSib);
// 23. Select the previous element sibling of the element stored in `topics` variable (#5) and change the `innerText` property to `Learning About Walking the DOM`.

let preSibElement = topics.previousElementSibling;
preSibElement.innerText = `Learning About Walking the DOM`;

// 24. Select the first element child of the element stored in `topics` variable (#5) and change the `innerText` property of the element to `This is the first child element`.

let firstTopicChild =
  (topics.firstElementChild.innerText = `This is first child element`);

// 25. Select the last element child of the element stored in `topics` variable (#5) and log the `typeof` the element.

let lastTopicChild = topics.lastElementChild;
// console.log(typeOf(lastTopicChild));
// 26. Select the element with type `fieldset` and store in a variable named `fieldsetElm`.

let fieldsetElm = document.body.querySelector(`fieldset`);

// 27. Select the parent element of the element stored in `fieldsetElm` variable (#5) and log the `typeof` the element.
let parentOfFieldset = fieldsetElm.parentElement;
console.log(parentOfFieldset);
