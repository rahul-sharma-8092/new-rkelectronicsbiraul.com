/* ==========================================
   SCROLL ANIMATION
========================================== */

const fadeElements = document.querySelectorAll(".fade-up");

function revealOnScroll() {
  fadeElements.forEach((element) => {
    const windowHeight = window.innerHeight;

    const elementTop = element.getBoundingClientRect().top;

    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ==========================================
   HEADER SHADOW ON SCROLL
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
  } else {
    header.style.boxShadow = "none";
  }
});

/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;

      const target = parseInt(counter.dataset.target);

      let current = 0;

      const increment = target / 100;

      const updateCounter = () => {
        current += increment;

        if (current < target) {
          counter.innerText = Math.ceil(current);

          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();

      counterObserver.unobserve(counter);
    });
  },
  {
    threshold: 0.5,
  },
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    e.preventDefault();

    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* ==========================================
   CURRENT YEAR
========================================== */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* ==========================================
   FAQ ACCORDION
========================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    faqItems.forEach((faq) => {
      faq.classList.remove("active");
    });

    if (!isOpen) {
      item.classList.add("active");
    }
  });
});
