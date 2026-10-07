const menuBtn = document.querySelector(".menu-btn")
const links = document.querySelector(".nav-links")

  menuBtn.addEventListener("click", function(){
    links.classList.toggle("active")
  })