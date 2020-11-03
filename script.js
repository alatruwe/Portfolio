// declare variable mainNav and get navbar list
let mainNav = document.getElementById('js-menu');

// declare variable navBarToggle and get navbar icon
let navBarToggle = document.getElementById('js-navbar-toggle');

// when event 'click' on navBarToggle happens, toggle down mainNav
navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
})