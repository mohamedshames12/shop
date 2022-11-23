var menu = document.getElementById("menu");
var navBar = document.querySelector(".navbar");


menu.addEventListener("click" , (eo) => {
    eo.preventDefault();
    navBar.classList.toggle("active");
})

window.onscroll = () => {
    navBar.classList.remove("active");
}


