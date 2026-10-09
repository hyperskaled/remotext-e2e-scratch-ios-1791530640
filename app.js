// Reveal project cards as they scroll into view.
const cards = document.querySelectorAll(".card");

const revealObserver = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("visible"); }); });

cards.forEach((card) => revealObserver.observe(card));

const topLink = document.querySelector("nav a");
topLink.addEventListener("click", (event) => { event.preventDefault();
document.getElementById("top").scrollIntoView({ behavior: "smooth" });
console.log("Scrolled to top.");
});

const themeToggle = document.querySelector(".contact");
let isLight = false;

themeToggle.addEventListener("click", (event) => { event.preventDefault();
isLight = !isLight;
document.body.classList.toggle("light", isLight);
console.log(`Theme is now ${isLight ? "light" : "dark"}.`);
});