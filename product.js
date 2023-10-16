var btnSubmit = document.querySelector("#submitBtn");
var tblData = document.querySelector("#tableData");
var updatePrice = document.querySelector("#totalValue");
btnSubmit.addEventListener("click", storeProduct);

var apiEndpoint =
  "https://crudcrud.com/api/d20857dcad2e467fb74346836ef45e56/productDetails";

//event listner to trigger when the dom is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  axios
    .get(apiEndpoint)
    .then((res) => {
      var allData = res.data;
      var totalAmount = 0;
      allData.forEach((ele) => {
        var htmlRow = `<tr>
        <td>${ele.price}</td>
        <td>${ele.name}</td>
        <td><button class="delete" id="delData${ele._id}" onclick="deleteData(event,'${ele._id}')"
        >Delete</button></td>
        </tr>`;
        tblData.innerHTML += htmlRow;
        totalAmount += +ele.price;
      });
      updatePrice.innerHTML = `Total Value Worth Of Products: Rs ${totalAmount}`;
    })
    .catch((err) => {
      document.body.innerHTML =
        document.body.innerHTML +
        "<h2>Error:" +
        err +
        "Error while fetching records</h2>";
    });
});

//function to store user
function storeProduct(e) {
  e.preventDefault();
  var p_price = document.getElementById("sellingPrice").value;
  var p_name = document.getElementById("productName").value;

  var product = {
    price: p_price,
    name: p_name,
  };

  axios
    .post(apiEndpoint, product)
    .then((element) => {
      console.log("Records inserted");
      var data = element.data;

      var htmlRow = `<tr>
        <td>${data.price}</td>
        <td>${data.name}</td>
        <td><button class="delete" id="delData${data._id} onclick="deleteData(event,'${data._id}'">Delete</button></td>
      </tr>`;
      tblData.innerHTML += htmlRow;
      refreshTable();
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
      refreshTable();
    })
    .catch((err) => {
      document.body.innerHTML =
        document.body.innerHTML + "<h2>" + err + "</h2>";
    });
}

function refreshTable() {
  axios.get(apiEndpoint).then((res) => {
    allData = res.data;

    var htmlHeader = `<tr style="background-color: antiquewhite;">
                        <th>Product Price</th>
                        <th>Product Name</th>
                        <th>Action</th>
                      </tr>`;
    var htmlRows = "";

    var totalAmount = 0;
    allData.forEach((ele) => {
      var htmlRow = `<tr>
      <td>${ele.price}</td>
        <td>${ele.name}</td>
        
        <td><button class="delete" id="delData" onclick="deleteData(event,'${ele._id}')">Delete</button></td>
        </tr>`;
      htmlRows += htmlRow;
      totalAmount += +ele.price;
    });
    tblData.innerHTML = htmlHeader + htmlRows;
    updatePrice.innerHTML = `Total Value Worth Of Products: Rs ${totalAmount}`;
  });
}
