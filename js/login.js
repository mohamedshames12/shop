const email =  document.getElementById("email");
const password =  document.getElementById("password");
const btnLogin = document.querySelector(".btn-login");
let text_err = document.querySelector(".text-err")
let get_email = localStorage.getItem("email");
let get_password = localStorage.getItem("password");

btnLogin.addEventListener("click", (eo) =>{
    eo.preventDefault();
    if(email.value === "" || password.value === ""){
        text_err.style.display = "block";
        text_err.innerHTML = "fill data";
    }else{
        if(get_email && get_email.trim() === email.value.trim() && get_password && get_password.trim() === password.value.trim()){
            setTimeout(() => { 
                window.location = "../pages/home.html";
             }, 1000)
        }else{
            text_err.style.display = "block";
            text_err.innerHTML = "email or password is incorrect!";
        }
    }
})