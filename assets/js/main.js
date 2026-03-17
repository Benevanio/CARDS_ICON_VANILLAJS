VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
    max: 8,
    speed: 500,
    glare: true,
    "max-glare": 0.2,
    scale: 1.02
});

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.18 });

reveals.forEach((item, index) => {
    item.style.transitionDelay = `${index * 60}ms`;
    observer.observe(item);
});
