// Smooth scroll to sections
function scrollToSection(linkId, targetId) {
  const link = document.getElementById(linkId);
  const target = document.getElementById(targetId);

  if (link && target) {
    link.addEventListener('click', () => {
      target.scrollIntoView({ behavior: "smooth" });
    });
  }
}

// Initialize scroll events
scrollToSection('my-work-link', 'my-work-section');
scrollToSection('contact_button', 'footer');

// Scroll-to-top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = "↑ Top";
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "20px";
scrollToTopButton.style.right = "20px";
scrollToTopButton.style.padding = "10px";
scrollToTopButton.style.display = "none";
scrollToTopButton.style.cursor = "pointer";
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Highlight navbar items on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.href.includes(current)) {
      link.classList.add("active");
    }
  });
});
