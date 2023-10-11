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
      "https://crudcrud.com/api/fe9aea7228604fe9a7edb7fc43a1e66d/appointmentData"
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
  var submitBtn = document.querySelector("#submitBtn");
  var saveBtn = document.querySelector("#saveBtn");

  if (e.target.classList.contains("edit")) {
    var li = e.target.parentElement;
    var id = li.querySelector("span").textContent;
    var nameData = li.textContent.split("-")[0].replace(id, "");
    var emailData = li.textContent.split("-")[1];
    var phoneData = li.textContent.split("-")[2].replace("DeleteEdit", "");

    name.value = nameData;
    email.value = emailData;
    phone.value = phoneData;

    // Hide "Submit" and show "Save" button
    submitBtn.style.display = "none";
    saveBtn.style.display = "block";

    saveBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // Get the updated values
      var newName = name.value;
      var newEmail = email.value;
      var newPhone = phone.value;

      var data = {
        name: newName,
        email: newEmail,
        phone: newPhone,
      };

      axios
        .put(
          `https://crudcrud.com/api/fe9aea7228604fe9a7edb7fc43a1e66d/appointmentData/${id}`,
          data
        )
        .then((res) => {
          // Update the content of the edited item with the updated data
          window.location.reload();
          // Clear form data
          name.value = "";
          email.value = "";
          phone.value = "";

          // Hide "Save" button and show "Submit" button
          saveBtn.style.display = "none";
          submitBtn.style.display = "block";
        })
        .catch((err) => {
          document.body.innerHTML =
            document.body.innerHTML + "<h4>Something Went Wrong</h4>";
          console.log(err);
        });
    });
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
        `https://crudcrud.com/api/fe9aea7228604fe9a7edb7fc43a1e66d/appointmentData/${elementId}`
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
      "https://crudcrud.com/api/fe9aea7228604fe9a7edb7fc43a1e66d/appointmentData",
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
