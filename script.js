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

const list=document.querySelector(".list")
let tempAmount=0


//Budget part

check.addEventListener("click",() =>
{
    tempAmount=Number(total.value);
    if(isNaN(tempAmount) || tempAmount<=0)
    {
        tberror.classList.remove("hide")

    }
    else
    {
        tberror.classList.add("hide")
        totalAmount.innerHTML=tempAmount;
        balance.innerText=tempAmount-Number(expense.innerText)
        total.value=""
    }
})