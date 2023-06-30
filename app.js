// var form = document.querySelector('#userFrom');
var subBtn = document.querySelector('#submitBtn');
subBtn.addEventListener('click', storeUser);
var delBtn = document.getElementById('data')
delBtn.addEventListener('click',delItem);

function delItem(e){
    e.preventDefault();

   if(e.target.classList.contains('delete')){
    var li = e.target.parentElement;
    var email = li.textContent.split('-')[1];
        localStorage.removeItem(email);
         delBtn.removeChild(li);
   }
}

function storeUser(e){
    e.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    // localStorage.setItem('name',name);
    // localStorage.setItem('email',email);
    // localStorage.setItem('phone',phone);

    var uDetails ={name:name,email:email,phone:phone};
    var userDetailsJson = JSON.stringify(uDetails);
    localStorage.setItem(email,userDetailsJson);

    var storedData = JSON.parse(localStorage.getItem(email));
    var showData = document.getElementById('data');
    var name = storedData.name;
    var email = storedData.email;
    var phone = storedData.phone;
    var htmlRow = '<li>'+name+'-'+email+'-'+phone+'<button class="delete" id="delData">Delete</button></li>';
    showData.innerHTML+=htmlRow;
}
   

 