// script.js - small enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Add active class on click for demo
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // keep default behaviour for dropdown toggles (don't change active)
      if (link.classList.contains('dropdown-toggle')) return;

      // remove active from all nav links (optional: keep dropdown parents)
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
