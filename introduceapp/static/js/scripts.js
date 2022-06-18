document.getElementById('project').onclick = function () {
  document.getElementsByClassName('container px-4 px-lg-5 main')[0].style.display = 'none';
  document.getElementsByClassName('container px-4 px-lg-5 project')[0].style.display = 'block';
  document.getElementById('home').classList.remove('active');
  document.getElementById('project').classList.add('active');
};

document.getElementById('home').onclick = function () {
  document.getElementsByClassName('container px-4 px-lg-5 project')[0].style.display = 'none';
  document.getElementsByClassName('container px-4 px-lg-5 main')[0].style.display = 'block';
  document.getElementById('project').classList.remove('active');
  document.getElementById('home').classList.add('active');
};
