burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
navright=document.querySelector('.navright');
navleft=document.querySelector('.navleft');
burger.addEventListener("click",()=>{
    navbar.classList.toggle('h-navresp');
    navright.classList.toggle('v-resp');
    navleft.classList.toggle('v-resp');
})