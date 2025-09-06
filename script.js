const projects = document.querySelectorAll('.project');

const appearOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  projects.forEach(project => {
    const top = project.getBoundingClientRect().top;
    if (top < triggerBottom) {
      project.classList.add('show');
    }
  });
};

window.addEventListener('scroll', appearOnScroll);
window.addEventListener('load', appearOnScroll);