var mainHeader = document.getElementById('nav-header');

window.addEventListener('scroll', function(e) {

  mainHeader.classList.remove('sticky');

if(window.scrollY >= 110) {
  mainHeader.classList.add('sticky');
}

});
