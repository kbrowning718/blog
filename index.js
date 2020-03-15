var mainHeader = document.getElementById('nav-header');

window.addEventListener('scroll', function(e) {

  mainHeader.classList.remove('sticky');

if(window.scrollY >= 110) {
  mainHeader.classList.add('sticky');
}

});

var deviceL = window.matchMedia("(max-width:1199px)");
var mobileNav = document.getElementById('hamburger-nav');
var logo = document.getElementById('logo-container');
var navLinkContainer = document.getElementById('nav-link-container');
var loadMore = document.getElementById('load-more');
var recentPost = document.getElementsByClassName('recent-post');

if(deviceL.matches) {

  for(var i = 0; i < recentPost.length; i++) {
    recentPost[i].classList.add('hide');
    recentPost[0].classList.remove('hide');
    recentPost[1].classList.remove('hide');
  }

loadMore.addEventListener("click", function (e) {
   loadMore.classList.toggle('show-less');
  for(var j = 0; j < recentPost.length; j++) {
recentPost[j].classList.toggle('hide');
}

if(loadMore.classList.contains('show-less')) {
  loadMore.innerHTML = "SHOW LESS <i class='fas fa-angle-up'></i>";
} else {
  loadMore.innerHTML = "LOAD MORE <i class='fas fa-spinner'>";
}
});

}
