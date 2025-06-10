// This script is intended for a contact form (though no form currently exists in the HTML)
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks for reaching out! I will get back to you soon.');
    });
  }
});
