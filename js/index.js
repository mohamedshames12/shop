window.onscroll = () =>{
    navBar.classList.remove("active");

    if(window.scrollY > 60){
        had.classList.add("active")
    }else{
        had.classList.remove("active")
    }
}