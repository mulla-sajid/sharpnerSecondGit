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
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// var addTitle = document.getElementsByClassName('title');
// console.log(headerTitle.textContent);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerHTML);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';
// header.style.borderBottom = 'solid 3px #000';
// console.log(addTitle);
// addTitle[0].style.fontWeight='bold';
// addTitle[0].style.color='green';


//GET ELEMENT BY CLASS NAME//
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';

// items.style.backgroundColor='#f4f4f4';
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }
// items[2].style.backgroundColor='green';


// GET ELEMENT BY TAG NAME//
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';

// li.style.backgroundColor='#f4f4f4';
// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold';
// }
li[2].style.backgroundColor='green';