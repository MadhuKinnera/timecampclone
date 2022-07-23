import {free,basic,pro,enterprise,call} from "../components/fetch.js"
let benifits=document.getElementById("benifits");
benifits.innerHTML=free();

let all =document.getElementById("selectplan")

let freediv=document.getElementById("free");
let basicdiv=document.getElementById("basic");
let prodiv=document.getElementById("pro");
let enterprisediv=document.getElementById("enterprise");

let price=document.getElementById("price");
let plan=document.getElementById("plan");
let charge=document.getElementById("charge");


let val=document.getElementById("input");


let purchase=document.getElementById("purchase")

let checkout=document.getElementById("checkout");




freediv.addEventListener("click",()=>{
    console.log("free selected");
    benifits.innerHTML=free();
    freediv.style.backgroundColor="white";
    basicdiv.style.backgroundColor="white";
    prodiv.style.backgroundColor="white";
    enterprisediv.style.backgroundColor="white";
    freediv.style.backgroundColor="rgba(107, 147, 160, 0.507)";
    
    price.innerText="$0/month";
    plan.innerText="Free";
    charge.innerText=0;
    val.addEventListener("change",()=>{
        charge.innerText=val.value*0;
    });

});



basicdiv.addEventListener("click",()=>{
    console.log("basic selected")
    benifits.innerHTML=basic();
    freediv.style.backgroundColor="white";
    basicdiv.style.backgroundColor="white";
    prodiv.style.backgroundColor="white";
    enterprisediv.style.backgroundColor="white";
    basicdiv.style.backgroundColor="rgba(107, 147, 160, 0.507)";


    price.innerText="$6.3/month";
    plan.innerText="Basic";
    charge.innerText=6.3;
    val.addEventListener("change",()=>{
        charge.innerText=val.value*6.3;
    });
});


prodiv.addEventListener("click",()=>{
    console.log("pro selected")
    benifits.innerHTML=pro();
    freediv.style.backgroundColor="white";
    basicdiv.style.backgroundColor="white";
    prodiv.style.backgroundColor="white";
    enterprisediv.style.backgroundColor="white";
    prodiv.style.backgroundColor="rgba(107, 147, 160, 0.507)";
    price.innerText="$9/month";
    plan.innerText="Pro";
    charge.innerText=9;
    val.addEventListener("change",()=>{
        charge.innerText=val.value*9;
    });

});


enterprisediv.addEventListener("click",()=>{
    console.log("enterprise selected")
    benifits.innerHTML=enterprise();
    freediv.style.backgroundColor="white";
    basicdiv.style.backgroundColor="white";
    prodiv.style.backgroundColor="white";
    enterprisediv.style.backgroundColor="white";
    enterprisediv.style.backgroundColor="rgba(107, 147, 160, 0.507)";
    purchase.innerHTML=call();

});


checkout.addEventListener("click",()=>{
    let amount=charge.innerText;
    localStorage.setItem("amount",JSON.stringify(amount));
    window.location.href="details.html";
})