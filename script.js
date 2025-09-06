const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', appearOnScroll);
window.addEventListener('load', appearOnScroll);