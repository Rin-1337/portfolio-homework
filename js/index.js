function port() {
  const target = $('#ex');
  if (target.length) {
    const top = target.offset().top;
    $('html, body').animate({ scrollTop: 2000 }, 800);
  }
}

function other() {
  const target = $('#skill');
  if (target.length) {
    const top = target.offset().top;
    $('html, body').animate({ scrollTop: 1000 }, 800);
  }
}

const text = baffle(".text__glitch");
text.set({
  characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>",
  speed: 30
});


function runGlitchCycle() {

  document.querySelectorAll('.text__glitch, .text_glitch').forEach(el => {
    el.setAttribute('data-text', el.textContent.trim());
  });

  text.start();
  text.reveal(600);
}

runGlitchCycle();
setInterval(runGlitchCycle, 4000);

function revealOnScroll() {

  const target = document.querySelector('.ohter-skill');
  if (!target) return;

  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          target.classList.add('is-visible');
        } else {
          target.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.15 });
    obs.observe(target);
  } else {
    const onCheck = () => {
      const rect = target.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
        target.classList.add('is-visible');
      } else {
        target.classList.remove('is-visible');
      }
    };
    window.addEventListener('scroll', onCheck);
    window.addEventListener('resize', onCheck);
    onCheck();
  }
}

document.addEventListener('DOMContentLoaded', revealOnScroll);