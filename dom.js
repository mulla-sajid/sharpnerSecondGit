var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);

// add item
function addItem(e){
e.preventDefault();

// get input value
var newItem = document.getElementById('item').value;

// create new li element
var li = document.createElement('li');
li.className='list-group-item';
li.appendChild(document.createTextNode(newItem));

// create delete button
var deleteBtn = document.createElement('button');
deleteBtn.className='btn btn-danger btn-sm float-end delete';
deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}


// remove item
function removeItem(e){
if(e.target.classList.contains('delete')){
    if(confirm('Are you sure')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}
}


// add edit button
var li = document.getElementsByTagName('li');
for(var i=0;i<li.length;i++){
    var editBtn = document.createElement('button');
editBtn.className='btn btn-primary btn-sm float-end';
editBtn.appendChild(document.createTextNode('Edit'));   
    var liItem = li[i];
    liItem.insertBefore(editBtn,liItem.lastChild);
}


