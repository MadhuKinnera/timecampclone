let count = 0;
document.getElementById("check").addEventListener("click",()=>{
    if(count %2 !== 0){
        document.getElementById("numchange1").innerText = `$ 6.3`;
        document.getElementById("numchange2").innerText = "$ 9";
    }else{
        document.getElementById("numchange1").innerText = `$ 7`;
        document.getElementById("numchange2").innerText = "$ 10";
    }
    count++;
});

let subs=document.getElementById("subs");
subs.addEventListener("click",()=>{
    window.location.href="../payment/subscription.html";
})

import navbar from "../../component/navbar.js";
import footer from "../../component/footer.js";
let nav =document.getElementById("navbar");
let foot =document.getElementById("footer");
nav.innerHTML=navbar();
foot.innerHTML=footer();