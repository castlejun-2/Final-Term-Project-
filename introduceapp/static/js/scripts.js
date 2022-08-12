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
  setNickNameToggler.addEventListener('click', function (e) {
    e.preventDefault();
    let setNickName = document.getElementById('setButton');
    let changeNickName = document.getElementById('changeButton');
    document.getElementById('guestNickName').disabled = true;
    setNickName.disabled = true;
    changeNickName.disabled = false;
  });
  let changeNickNameToggler = document.getElementById('changeButton');
  changeNickNameToggler.addEventListener('click', function (e) {
    e.preventDefault();
    let changeNickName = document.getElementById('changeButton');
    let setNickName = document.getElementById('setButton');
    document.getElementById('guestNickName').disabled = false;
    changeNickName.disabled = true;
    setNickName.disabled = false;
  });
  let submitBtnHandler = document.getElementById('submitBtn');
  submitBtnHandler.addEventListener('click', function (e) {
    guestName = document.getElementById('guestNickName');
    guestName.disabled = false;
    if (guestName.value === '') {
      alert('닉네임을 입력해주세요.');
    } else {
      alert('방명록이 등록되었습니다.');
    }
  });
  let cheeringBtnHandler = document.getElementById('cheeringBtn');
  cheeringBtnHandler.addEventListener('click', function (e) {
    alert('응원해주셔서 감사합니다!');
  });
});
