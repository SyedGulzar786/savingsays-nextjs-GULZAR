document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.getElementById('hamburgerButton');
    const navbarNav = document.getElementById('navbarNav');
  
    if (hamburgerButton && navbarNav) {
      hamburgerButton.addEventListener('click', function () {
        navbarNav.classList.toggle('show');
      });
    }
  });
  