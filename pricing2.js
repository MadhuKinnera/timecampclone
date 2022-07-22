let count = 0;
document.getElementById("check").addEventListener("click",()=>{
    if(count %2 === 0){
        document.getElementById("numchange1").innerText = `$ 6.3`;
        document.getElementById("numchange2").innerText = "$ 9";
    }else{
        document.getElementById("numchange1").innerText = `$ 7`;
        document.getElementById("numchange2").innerText = "$ 10";
    }
    count++;
})