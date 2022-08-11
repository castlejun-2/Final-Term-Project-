window.addEventListener('DOMContentLoaded', event => {
  let navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  };
  navbarShrink();
  document.addEventListener('scroll', navbarShrink);
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74,
    });
  }
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
  let setNickNameToggler = document.getElementById('setButton');
  setNickNameToggler.addEventListener('click', function () {
    let setNickName = document.getElementById('setButton');
    let changeNickName = document.getElementById('changeButton');
    let inputNickName = document.getElementById('guestNickName');
    setNickName.disabled = true;
    changeNickName.disabled = false;
    inputNickName.disabled = true;
  });
  let changeNickNameToggler = document.getElementById('changeButton');
  changeNickNameToggler.addEventListener('click', function () {
    let changeNickName = document.getElementById('changeButton');
    let setNickName = document.getElementById('setButton');
    let inputNickName = document.getElementById('name');
    changeNickName.disabled = true;
    setNickName.disabled = false;
    inputNickName.disabled = false;
  });
});
