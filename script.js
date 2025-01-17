document.getElementById('contact').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  alert('Your form is submitted!'); // Show the alert message
});

  // Skill Bars Animation
  const skillBars = document.querySelectorAll(".skill-bar-inner");
  const animateSkills = () => {
    skillBars.forEach((bar) => {
      const skillTop = bar.getBoundingClientRect().top;
      if (skillTop < window.innerHeight) {
        bar.style.width = bar.getAttribute("data-skill") + "%";
      }
    });
  };

  // Trigger skill bar animation on scroll
  document.addEventListener("scroll", animateSkills);

  // Trigger animation on page load
  animateSkills();



