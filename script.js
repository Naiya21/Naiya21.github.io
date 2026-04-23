const revealTargets = document.querySelectorAll(
  ".panel, .project-card, .timeline-item, .footer"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal", "visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((target) => {
  target.classList.add("reveal");
  observer.observe(target);
});
