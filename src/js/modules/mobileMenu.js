export default function mobileMenu() {

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1200) {
      const burgerButton = document.querySelector('.cmn-toggle-switch__htx');
      const mobileMenu = document.querySelector('.header__mobile-wrap');
      const html = document.documentElement;
      const navLinks = document.querySelectorAll('.header nav ul li a');
    
      burgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('header__mobile-wrap--active');
        burgerButton.classList.toggle('active');
        html.classList.toggle('no-scroll');
      });
    
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('header__mobile-wrap--active');
          burgerButton.classList.remove('active');
          html.classList.remove('no-scroll');
        });
      });
    }
  
    if (window.innerWidth >= 1200) {
      mobileMenu.classList.remove('header__mobile-wrap--active');
      burgerButton.classList.remove('active');
      html.classList.remove('no-scroll');
    }
  });
}
