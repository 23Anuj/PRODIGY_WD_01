
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const hamburgerBtn = document.querySelector("#hamburger-btn");
    const closeMenuBtn = document.querySelector("#close-menu-btn");
  
    hamburgerBtn.addEventListener("click", function() {
      header.classList.toggle("show-mobile-menu");
    });
  
    closeMenuBtn.addEventListener("click", function() {
      header.classList.remove("show-mobile-menu");
    });
  });
  