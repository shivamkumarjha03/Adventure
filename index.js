/* menu*/
const menubtn =document.querySelector('.menu-btn')
const navlinks =document.querySelector('.nav-link')
menubtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu')
}) 