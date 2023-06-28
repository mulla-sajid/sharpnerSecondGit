//TRAVERSING THE DOM//
var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);

// // childNode
// // console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// // firstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello1';
// // lastChild
// console.log(itemList.lastChild);
// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello4';

// // nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);
// // previousSibling
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling);

// createElement
// Create a div
var newDiv = document.createElement('div');
// Add class
newDiv.className='hello';
// Add id
newDiv.id='hello1';
// Add attr
newDiv.setAttribute('title', 'Hello Div');
// Create text node
var newDivText = document.createTextNode('Hello World');
// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
// console.log(newDiv);    
container.insertBefore(newDiv, h1);

var newItem = document.createElement('li');
newItem.className='list-group-item';
console.log(newItem);
var newLiText = document.createTextNode('HEllo world');
newItem.appendChild(newLiText);

var ul = document.querySelector('div .list-group');
var listLi = document.querySelector('div li');
ul.insertBefore(newItem, listLi);

