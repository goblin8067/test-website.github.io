const navbar = document.querySelector('.navbar-id');
const header = document.querySelector('.header');
const navbarHeight = navbar.offsetHeight;
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;
  if (scrollDistance >= headerHeight) {
    navbar.classList.add('active')
  }
  else {
    navbar.classList.remove('active')
  }

})
