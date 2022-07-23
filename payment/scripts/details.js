let amount=JSON.parse(localStorage.getItem("amount")) || 0;
let amountdiv=document.getElementById("amount");
amountdiv.innerText=amount;
    
let button=document.getElementById("submit");
button.addEventListener("click",()=>{
    window.location.href="otp.html";
})