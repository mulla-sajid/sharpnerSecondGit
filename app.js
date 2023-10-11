var subBtn = document.querySelector("#submitBtn");
var form = document.querySelector(".body-main");
subBtn.addEventListener("click", storeUser);
var delBtn = document.getElementById("data");
var edBtn = document.getElementById("data");
delBtn.addEventListener("click", delItem);
edBtn.addEventListener("click", editItem);

// this event listener will trigger when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const allData = axios
    .get(
      "https://crudcrud.com/api/2576c3fbe0544d3d971614f0082dfab4/appointmentData"
    )
    .then((res) => {
      var data = res.data;
      var showData = document.getElementById("data");
      data.forEach((element) => {
        var htmlRow =
          "<li>" +
          '<span style="display:none">' +
          element._id +
          "</span>" +
          element.name +
          "-" +
          element.email +
          "-" +
          element.phone +
          '<button class="delete" id="delData">Delete</button><button class="edit" id="editData">Edit</button></li>';
        showData.innerHTML += htmlRow;
      });
    })
    .catch((err) => {
      document.body.innerHTML =
        document.body.innerHTML + "<h4>Something Went Wrong</h4>";
      console.log(err);
    });
  console.log(allData);
});

//function to edit appointments
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

//function to delete appointments
function delItem(e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    var li = e.target.parentElement;
    // var elementId = li.dataset._id;
    var elementId = li.querySelector("span").textContent;
    console.log("Deleting item with _id:", elementId);
    // localStorage.removeItem(email);
    axios
      .delete(
        `https://crudcrud.com/api/2576c3fbe0544d3d971614f0082dfab4/appointmentData/${elementId}`
      )
      .then((res) => {
        console.log("Item deleted:", elementId);
        delBtn.removeChild(li);
      })
      .catch((err) => {
        document.body.innerHTML =
          document.body.innerHTML +
          "<h4>Something Went Wrong While Deleting</h4>";
        console.log("Error deleting item:", err);
      });

    // delBtn.removeChild(li);
  }
}

//function to store appointments
function storeUser(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  var uDetails = { name: name, email: email, phone: phone };

  axios
    .post(
      "https://crudcrud.com/api/2576c3fbe0544d3d971614f0082dfab4/appointmentData",
      uDetails
    )
    .then((res) => {
      var _id = res.data._id;
      var name = res.data.name;
      var email = res.data.email;
      var phone = res.data.phone;
      var showData = document.getElementById("data");

      var htmlRow =
        "<li>" +
        '<span style="display:none">' +
        _id +
        "</span>" +
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
        document.body.innerHTML +
        "<h4> Something Went Wrong While Displaying</h4>";
      console.log(err);
    });
}
