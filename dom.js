//Examine the documnet object//
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[9]);
// // document.all[9].textContent='Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

//GET ELEMENT BY ID//
// console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
var addTitle = document.getElementsByClassName('title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerHTML);
// headerTitle.innerHTML = '<h3>Hello</h3>';
headerTitle.style.borderBottom = 'solid 3px #000';
// header.style.borderBottom = 'solid 3px #000';
console.log(addTitle);
addTitle[0].style.fontWeight='bold';
addTitle[0].style.color='green';