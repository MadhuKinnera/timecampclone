// console.log("hello");

let loginArr = JSON.parse(localStorage.getItem("user")) || [];

class User{
    #password
    constructor(e,p){
        this.email = e;
        this.password =  p;
    }  

    Login(email,pass){
        let res= false ;
        let count = 0;
        loginArr.forEach(el=>{
            if(el.email == email && el.password == pass){
                res = true;
                 count++;
            }
        })
        if(res==true && count>0){
            alert("Login Sucessful!");
            window.location.href = "../homepage/index.html";
        }else{
            alert("invalid Credentials")
        }
    }
}




let Login = (event)=>{
    event.preventDefault();
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let data = new User(email,pass)
    console.log(data);
    data.Login(email,pass)
}


document.getElementById("submit").addEventListener("click",Login)

