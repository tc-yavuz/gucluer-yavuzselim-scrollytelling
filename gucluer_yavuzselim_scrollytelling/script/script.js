let minuteur;

function handleScroll() {
    document.body.classList.add('is-scrolling');
  
    clearTimeout(minuteur);
  
    minuteur = setTimeout(function() {
      document.body.classList.remove('is-scrolling');
    }, 100);
  }
  
  window.addEventListener('scroll', handleScroll);