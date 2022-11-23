var btn_eye = document.getElementById("eye-btn");
var password_eye = document.getElementById("password");

btn_eye.addEventListener("click", (eo) => {
    eo.preventDefault();
    if(password_eye.type === "password"){
        password_eye.type = "text";
        btn_eye.classList.add("active");
    }else{
        password.type = "password";
        btn_eye.classList.remove("active");
    }
})