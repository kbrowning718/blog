var mainHeader = document.getElementById('nav-header');

window.addEventListener('scroll', function(e) {

  mainHeader.classList.remove('sticky');

if(window.scrollY >= 110) {
  mainHeader.classList.add('sticky');
}

});

var deviceL = window.matchMedia("(max-width:1199px)");
var deviceM = window.matchMedia("(min-width:992px)");
var deviceS = window.matchMedia("(max-width:767px)");
var sidebarD = document.getElementById('sidebar-desktop');
var mobileNav = document.getElementById('hamburger-nav');
var logo = document.getElementById('logo-container');
var navLinkContainer = document.getElementById('nav-link-container');
var loadMore = document.getElementById('load-more');
var recentPost = document.getElementsByClassName('recent-post');

if(deviceM.matches) {
  sidebarD.innerHTML =
  "<div class='sidebar-menu-wrapper-desktop'><div class='search-bar-container'><input type='text' id='search' name='search' placeholder='Search'><div class='search-icon-container'><label class='search-icon' for='search'><i class='fas fa-search'></i></label></div></div><div class='recent-post-header'><i class='fas fa-long-arrow-alt-right'></i> <p class='subtitle-headline strong'>Recent Posts</p></div><div class='recent-post'><h4 class='recent-post-h4'>Recent Post Header Goes Here: A Tale of Lorem Ipsum</h4><p>Thoncus dolor purus non enim praesent. Risus at ultrices.</p><div class='read-more-container'><a href='#'>READ MORE</a><i class='fab fa-first-order'></i></div></div>"
}
