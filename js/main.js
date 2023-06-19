window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > 0) {
      navbar.classList.remove('bg-transparent', 'bg-opacity-0');
      navbar.classList.add('bg-neutral-950', 'bg-opacity-100');
    } else {
      navbar.classList.remove('bg-neutral-950', 'bg-opacity-75');
      navbar.classList.add('bg-transparent', 'bg-opacity-0');
    }
  });