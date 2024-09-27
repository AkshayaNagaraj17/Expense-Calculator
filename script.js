let total=document.getElementById("total")
let userAmount=document.getElementById("user-amount")
let product=document.getElementById("product")
const setBudget=document.querySelector(".budget-btn")

const check=document.querySelector(".check-btn")


const totalAmount=document.getElementById("amount")
const balance=document.getElementById("balance")
const expense=document.getElementById("exp-value")

const tberror=document.getElementById("tberror")
const eerror=document.getElementById("eerror")
const cerror=document.getElementById("cerror")

const listContainer=document.querySelector(".list-container")
let tempAmount=0
let totalExpenses=0

//Budget part

setBudget.addEventListener("click",() =>
{
    tempAmount=Number(total.value);
    if(isNaN(tempAmount) || tempAmount <= 0)
    {
        tberror.classList.remove("hide")

    }
    else
    {
        tberror.classList.add("hide")
        totalAmount.innerHTML=tempAmount;
        balance.innerText=tempAmount-totalExpenses
        total.value=""
    }
})

//function to disable edit and delete button

const disableButtons=(bool) =>
{
    let editButtons=document.getElementsByClassName("edit")
    Array.from(editButtons).forEach((element)=>
    {
        element.disabled=bool
    })
}

const modifyElement=(element,edit=false) =>
{
   let parentDiv =element.parentElement 
   let currentBalance=balance.innerText
   let currentExpense=expense.innerText
   let parentAmount =parentDiv.querySelector(".amount").innerText
   if(edit)
   {
    let parentText=parentDiv.querySelector(".product").innerText
    product.value=parentText
    tempAmount.value=parentAmount
    disableButtons(true)
   }
   balance.innerText=parseInt(currentBalance)+parseInt(parentAmount)
   expense.innerText=parseInt(currentExpense)-parseInt(parentAmount)
}


//Function to create list
const listCreator = (expenseName, expenseValue) => {
    let sublistContent = document.createElement("div");
    sublistContent.classList.add("sublist-content", "flex-space");
  
    sublistContent.innerHTML = `
      <p class="product">${expenseName}</p>
      <p class="amount">${expenseValue}</p>`;
  
    let editButton = document.createElement("button");
    editButton.classList.add("fa-solid", "fa-pen-to-square", "edit");
    editButton.style.fontSize = "1.2em";
    editButton.addEventListener("click", () => {
      modifyElement(editButton, true);
    });
  
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
    deleteButton.style.fontSize = "1.2em";
    deleteButton.addEventListener("click", () => {
      deleteExpense(deleteButton);
    });
  
    sublistContent.appendChild(editButton);
    sublistContent.appendChild(deleteButton);
  
    listContainer.appendChild(sublistContent); // Append to the correct container
  };