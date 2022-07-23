var signupdata=JSON.parse(localStorage.getItem('data'))

function login(){
    signupdata.forEach(function(el){
        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;

        if(email==el.email && password== el.password){
            alert("login sucessful")
            window.location.href="index.html"
        }
        else{
            alert("Invalid credential")
        }
    })
}