const toggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const toggleIcon = document.getElementById('toggle-icon');

toggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isOpen);

    toggleIcon.classList.toggle('fa-bars', !isOpen);
    toggleIcon.classList.toggle('fa-xmark', isOpen);
});

document.querySelectorAll('.heart-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('active');
    });
});


// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Newsletter form validation
const newsletterForm = document.querySelector('#newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
      e.preventDefault();
      alert('Please enter a valid email address.');
      emailInput.focus();
    }
  });
}

// Auto highlight navbar link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLink?.classList.add('active');
    } else {
      navLink?.classList.remove('active');
    }
  });
});

// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.2
});
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


