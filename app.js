// var form = document.querySelector('#userFrom');
var subBtn = document.querySelector('#submitBtn');
subBtn.addEventListener('click', storeUser);

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
    localStorage.setItem('userDetail',userDetailsJson);

    alert('Date stored');
}
 