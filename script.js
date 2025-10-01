// Menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// Active menu
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    mainNav.classList.remove('open');
  });
});

// Scroll reveal
const revealElements = document.querySelectorAll('section, .project-item, .sharing-item, .product-item');
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Header shrink
const header = document.querySelector('header.main-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

// Ripple effect for buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('click', function(e) {
    let ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.left = (e.clientX - this.getBoundingClientRect().left) + "px";
    ripple.style.top = (e.clientY - this.getBoundingClientRect().top) + "px";
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});
