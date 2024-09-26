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
const listcreator=(expenseName,expenseValue)=>
{
    let subList=createElement("div")
    
}