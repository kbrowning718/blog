var mainHeader = document.getElementById('nav-header');
var mobileNavMenu = document.getElementById('mobile-nav-menu');

window.addEventListener('scroll', function(e) {
  mainHeader.classList.add('default-header');
  mainHeader.classList.remove('sticky');
  mobileNavMenu.classList.add('left');


if(window.scrollY >= 500) {
  mainHeader.classList.remove('default-header');
}

if(window.scrollY < 350) {
  mainHeader.classList.add('sticky');
  mainHeader.classList.remove('default-header');
}

});


var deviceL = window.matchMedia("(max-width:1199px)");
var deviceM = window.matchMedia("(min-width:767px)");
var deviceS = window.matchMedia("(max-width:767px)");
var sidebarD = document.getElementById('sidebar-desktop');
var mobileNav = document.getElementById('hamburger-nav');
var navLinkContainer = document.getElementById('nav-link-container');
var recentPost = document.getElementsByClassName('recent-post');

if(deviceL.matches) {
  mobileNav.addEventListener('click', function (e) {
    mobileNavMenu.classList.toggle('left');
  });
}

if(deviceM.matches) {
  sidebarD.innerHTML =
  "<div class='sidebar-menu-wrapper-desktop'><div class='search-bar-container'><input type='text' id='search' name='search' placeholder='Search'><div class='search-icon-container'><label class='search-icon' for='search'><i class='fas fa-search'></i></label></div></div><div class='recent-post-header'><i class='fas fa-long-arrow-alt-right'></i> <p class='subtitle-headline strong'>Recent Posts</p></div><div class='recent-post'><h4 class='recent-post-h4'>Recent Post Header Goes Here: A Tale of Lorem Ipsum</h4><p>Thoncus dolor purus non enim praesent. Risus at ultrices.</p><div class='read-more-container'><a href='#'>READ MORE</a><i class='fab fa-first-order'></i></div></div><div class='recent-post'><h4 class='recent-post-h4'>Recent Post Header Goes Here: A Tale of Lorem Ipsum</h4><p>Thoncus dolor purus non enim praesent. Risus at ultrices.</p><div class='read-more-container'><a href='#'>READ MORE</a><i class='fab fa-first-order'></i></div></div><div class='recent-post'><h4 class='recent-post-h4'>Recent Post Header Goes Here: A Tale of Lorem Ipsum</h4><p>Thoncus dolor purus non enim praesent. Risus at ultrices.</p><div class='read-more-container'><a href='#'>READ MORE</a><i class='fab fa-first-order'></i></div></div> <div class='see-all-container'><a href='#'>SEE ALL RECENT POSTS  <i class='fas fa-long-arrow-alt-right'></i></a></p></div><div class='email-subscribe-container'><p class='email-subscribe-header'>Join our VIP Club</p><p>Stay up-to-date on the latest content from <span class='strong'>Company Name</span> by joining our email list.</p><div class='email-input-container'><input class='email-input' type='text' id='email' name='email' placeholder='Email'><label class='email-subscribe-label' for='email' id='email-submit'>Submit</label></div><a class='tcs' href='#'>Terms & Conditions</a></div><div class='social-container desktop'><i class='fas fa-envelope'></i><i class='fab fa-facebook-f'></i><i class='fab fa-twitter'></i><i class='fab fa-linkedin-in'></i></div></div>"
}

var loadMore = document.getElementById('load-more');

  loadMore.addEventListener('click', function (e) {
      loadMore.innerHTML = "SHOW LESS <i class='fas fa-angle-up'></i>";
    loadMore.classList.toggle('show-less');


    var recentPost = document.getElementsByClassName('recent-post');

    for(i = 0; i < recentPost.length; i++) {

    if(loadMore.classList.contains('show-less')) {
      loadMore.innerHTML = "SHOW LESS <i class='fas fa-angle-up'></i>";
      recentPost[2].classList.remove('hide');
      recentPost[3].classList.remove('hide');
} else {
    loadMore.innerHTML = "LOAD MORE <i class='fas fa-angle-down'>";
    recentPost[2].classList.add('hide');
    recentPost[3].classList.add('hide');

}
}

      });
