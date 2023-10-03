var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var liTag = document.getElementsByTagName('li');
var filter = document.getElementById('filter');
var space = document.createTextNode(' ');

// form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);

// add item
function addItem(e){
e.preventDefault();

// get input value
var newItem = document.getElementById('item').value;

// get input description
var newInputDesc = document.getElementById('item-description').value;
// create new li element
var li = document.createElement('li');
li.className='list-group-item';
li.appendChild(document.createTextNode(newItem));
li.appendChild(document.createTextNode(newInputDesc));

// create delete button
var deleteBtn = document.createElement('button');
deleteBtn.className='btn btn-danger btn-sm float-end delete';
deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
     // add edit button
var editBtn = document.createElement('button');
editBtn.className ='btn btn-primary btn-sm float-end delete';
editBtn.appendChild(document.createTextNode('Edit'));
li.appendChild(editBtn);
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
for(var i=0;i<liTag.length;i++){
    var editBtn = document.createElement('button');
editBtn.className='btn btn-primary btn-sm float-end';
editBtn.appendChild(document.createTextNode('Edit'));
    var liItem = liTag[i];
    liItem.appendChild(editBtn);
}

// filterItems
function filterItems(e){
// converts text to lowercase
    var text = e.target.value.toLowerCase();
    // get list
    var items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){

        var itemName = item.firstChild.textContent;
        var itemDec = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) !=-1 || itemDec.toLowerCase().indexOf(text) !=-1){
            item.style.display ='block';
        }else{
            item.style.display = 'none';
        }

    });
}