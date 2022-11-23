let fName = document.getElementById("fname");
let lName = document.getElementById("lname");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn_next = document.getElementById("btn");
let text_err = document.querySelector(".text-err");
 
btn_next.addEventListener("click", (eo) => {
   eo.preventDefault();
   if(fName.value === "" || lName.value === "" || phone.value === "" || email.value === "" || password.value === ""){
    text_err.style.display = "block";
   }else{
    localStorage.setItem("first_name", fName.value);
    localStorage.setItem("last_name", lName.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    setTimeout(() => { 
        window.location = "login.html";
     }, 1000)
   }
})