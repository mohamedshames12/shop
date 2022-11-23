const email = localStorage.getItem("email");

if(!email){
    window.location = "../auth/register.html";
}

var swiper = new Swiper(".home-slider", {
  loop:true,
  grabCursor:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
