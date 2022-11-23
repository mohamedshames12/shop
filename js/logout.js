var logOut = document.getElementById("logout");

logOut.addEventListener("click", (eo) => {
    eo.preventDefault();
    localStorage.clear();
    setTimeout(() => { 
        window.location = "../index.html";
     }, 1000);
});

var login = document.getElementById("login");

login.addEventListener("click", (eo) => {
    eo.preventDefault();
    localStorage.clear();
    setTimeout(() => { 
        window.location = "../index.html";
     }, 1000);
});


var register = document.getElementById("register");

register.addEventListener("click", (eo) => {
    eo.preventDefault();
    localStorage.clear();
    setTimeout(() => { 
        window.location = "../index.html";
     }, 1000);
});


let user = document.getElementById("user");
let info = document.querySelector(".info");
user.addEventListener("click", (eo) => {
    eo.preventDefault();
    info.classList.toggle("active");
})


window.onscroll = () => {
    info.classList.remove("active");
}


