// console.log("hello");

let signArr = JSON.parse(localStorage.getItem("user")) || [];

class User{
    #password
    constructor(e,p,mob){
        this.email = e;
        this.password =  p;
        this.phone = mob;

    }

    Signup(email,pass){
        let isValidated = false;
        isValidated = this.#Useremail(email) && this.#Userpassword(pass);
        if(isValidated){
            signArr.push(this)
            localStorage.setItem("user",JSON.stringify(signArr));
            alert("Signup Sucessfull");
            window.location.href="login.html"

        }else{
            alert("Content Already exist");
        }

    }

    #Useremail(email){
        let filtered = signArr.filter(el=>{
            return el.email == email
        })
        if(filtered.length>0){
            return false;
        }else{
            return true;
        }
    }

    #Userpassword(pass){
        return true;
    }

    Login(email,pass){
        let res= false ;
        let count = 0;
        signArr.forEach(el=>{
            if(el.email == email && el.password == pass){
                res = true;
                 count++;
            }
        })
        if(res==true && count>0){
            alert("Login Sucessful!");
            window.location.href = ""
        }else{
            alert("invalid Credentials")
        }
    }


}


let SignUp = ()=>{

    event.preventDefault();

    // console.log("hello");

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;

    let data = new User(email,password,phone);

    data.Signup(email,password)

    // console.log(data)

}

let Login = ()=>{
    event.preventDefault();
    let email = doc.getElementById("name").value;
    let pass = doc.getElementById("email").value;
    let data = new User(email,pass)
}


document.querySelector("form").addEventListener("submit",SignUp)

