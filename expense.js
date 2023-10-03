let expenseForm = document.querySelector("form");
expenseForm.addEventListener("submit",addExpense);

//Add Expense
function addExpense(e){
e.preventDefault();

//get values from form
let expAmount = document.getElementById('expenseAmount').value;
let expDescription = document.getElementById('expenseDescription').value;
let expCategory = document.getElementById('expenseCategory').value;

//check for empty values
if(!expAmount || !expDescription || !expCategory){
    alert("Please fill all values");
    return;
}

let expense = {
    expAmount,expDescription,expCategory,
};

let existingExpense = JSON.parse(localStorage.getItem("expense")) || [];

existingExpense.push(expense);

localStorage.setItem("expense",JSON.stringify(existingExpense));


 
 document.getElementById('expenseAmount').value = "";
 document.getElementById('expenseDescription').value = "";
 document.getElementById('expenseCategory').value = "";
 document.querySelector("form").reset();

displayExpenses();
}

function displayExpenses(){
    let expenseList = document.getElementById("expenseList");
    let expenses = JSON.parse(localStorage.getItem("expense"))||[];
    expenseList.innerHTML = "";
    for(let [index,expense] of expenses.entries()){
        let listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        listItem.innerHTML =`
        ExpenseAmount: ${expense.expAmount}, ExpenseDescription: ${expense.expDescription}, ExpenseCategory: ${expense.expCategory} <button class="btn btn-primary" onclick="editExpense(${index})">Edit</button>
        <button class="btn btn-danger" onclick="deleteExpense(${index})">Delete</button>`;
        expenseList.appendChild(listItem);
    }
}

function deleteExpense(index) {
    let expenses = JSON.parse(localStorage.getItem("expense")) || [];

   
    expenses.splice(index, 1);

  
    localStorage.setItem("expense", JSON.stringify(expenses));

  
    displayExpenses();
}


function editExpense(index) {
    let expenses = JSON.parse(localStorage.getItem("expense")) || [];
    let expenseToEdit = expenses[index];


    document.getElementById('expenseAmount').value = expenseToEdit.expAmount;
    document.getElementById('expenseDescription').value = expenseToEdit.expDescription;
    document.getElementById('expenseCategory').value = expenseToEdit.expCategory;

 
    expenses.splice(index, 1);


    localStorage.setItem("expense", JSON.stringify(expenses));

   
    displayExpenses();
}
