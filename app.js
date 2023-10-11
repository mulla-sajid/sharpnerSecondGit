// var form = document.querySelector('#userFrom');
var subBtn = document.querySelector("#submitBtn");
var form = document.querySelector(".body-main");
subBtn.addEventListener("click", storeUser);
var delBtn = document.getElementById("data");
var edBtn = document.getElementById("data");
delBtn.addEventListener("click", delItem);
edBtn.addEventListener("click", editItem);

function editItem(e) {
  var name = document.querySelector("#name");
  var email = document.querySelector("#email");
  var phone = document.querySelector("#phone");
  if (e.target.classList.contains("edit")) {
    var li = e.target.parentElement;
    name.value = li.textContent.split("-")[0];
    email.value = li.textContent.split("-")[1];
    phone.value = li.textContent.split("-")[2].replace("DeleteEdit", "");
    localStorage.removeItem(li.textContent.split("-")[1]);
    delBtn.removeChild(li);
  }
}

function delItem(e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    var li = e.target.parentElement;
    var email = li.textContent.split("-")[1];
    localStorage.removeItem(email);
    delBtn.removeChild(li);
  }
}

function storeUser(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  // localStorage.setItem('name',name);
  // localStorage.setItem('email',email);
  // localStorage.setItem('phone',phone);

  var uDetails = { name: name, email: email, phone: phone };
  //   var userDetailsJson = JSON.stringify(uDetails);
  var name;
  var email;
  var phone;
  axios
    .post(
      "https://crudcrud.com/api/820453b5e2ec4ac297bddc7224602cb3/appointmentData",
      uDetails
    )
    .then((res) => {
      res.name;
      res.email;
      res.phone;
      var showData = document.getElementById("data");
      //   var name = storedData.name;
      //   var email = storedData.email;
      //   var phone = storedData.phone;
      var htmlRow =
        "<li>" +
        name +
        "-" +
        email +
        "-" +
        phone +
        '<button class="delete" id="delData">Delete</button><button class="edit" id="editData">Edit</button></li>';
      showData.innerHTML += htmlRow;
      console.log(res);
    })
    .catch((err) => {
      document.body.innerHTML =
        document.body.innerHTML + "<h4> Something Went Wrong</h4>";
      console.log(err);
    });

  //   localStorage.setItem(email, userDetailsJson);

  //   var storedData = JSON.parse(localStorage.getItem(email));
  //   var showData = document.getElementById("data");
  //   //   var name = storedData.name;
  //   //   var email = storedData.email;
  //   //   var phone = storedData.phone;
  //   var htmlRow =
  //     "<li>" +
  //     name +
  //     "-" +
  //     email +
  //     "-" +
  //     phone +
  //     '<button class="delete" id="delData">Delete</button><button class="edit" id="editData">Edit</button></li>';
  //   showData.innerHTML += htmlRow;
}
