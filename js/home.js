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



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '349e548675mshcaaa241ea46b9d0p137e90jsndcdee3152e11',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

// fetch("https://api.tvmaze.com/shows/1/seasons")
// .then((res) => res.json())
// .then((data) => console.log(data))



// https://fakestoreapi.com/products