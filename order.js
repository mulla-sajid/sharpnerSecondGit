var btnSubmit = document.querySelector("#submitBtn");
btnSubmit.addEventListener("click", storeProduct);

var apiEndpoint =
  "https://crudcrud.com/api/72ff201e016a4c53bb769d1f94412a39/orderDetails";

//event listner to trigger when the dom is fully loaded

document.addEventListener("DOMContentLoaded", function () {
  loadTableData();
});

function loadTableData() {
  var ssTable = document.querySelectorAll(".ss_table");
  for (var i in ssTable) {
    ssTable[i].innerHTML = `<tr style="background-color: antiquewhite;">
      <th>Order Price</th>
      <th>Dish Name</th>
      <th>Order Table</th>
      <th>Action</th>
  </tr>`;
  }
  axios
    .get(apiEndpoint)
    .then((res) => {
      var allData = res.data;
      allData.forEach((ele) => {
        console.log(allData);
        var tblData = document.getElementById(ele.tableName);
        var htmlRow = `<tr>
        <td>${ele.orderPrice}</td>
        <td>${ele.dishName}</td>
        <td>${ele.tableName}</td>
        <td><button class="delete" id="delData${ele._id}" onclick="deleteData(event,'${ele._id}')"
        >Delete</button></td>
        </tr>`;
        tblData.innerHTML += htmlRow;
      });
    })
    .catch((err) => {
      document.body.innerHTML =
        document.body.innerHTML +
        "<h2>Error:" +
        err +
        "Error while fetching records</h2>";
    });
}

//function to store user
function storeProduct(e) {
  e.preventDefault();
  var o_price = document.getElementById("orderPrice").value;
  var d_name = document.getElementById("dishName").value;
  var t_name = document.getElementById("tableValues").value;

  var product = {
    orderPrice: o_price,
    dishName: d_name,
    tableName: t_name,
  };

  axios
    .post(apiEndpoint, product)
    .then((element) => {
      console.log("Order placed");
      loadTableData();
    })
    .catch((err) => {
      document.body.innerHTML =
        document.body.innerHTML + "<h4>Error:" + err + "</h4>";
    });
}

function deleteData(event, id) {
  event.preventDefault();
  axios
    .delete(`${apiEndpoint}/${id}`)
    .then((res) => {
      loadTableData();
    })
    .catch((err) => {
      document.body.innerHTML =
        document.body.innerHTML + "<h2>" + err + "</h2>";
    });
}
