const burger = document.querySelector('.header-burger');
  const offcanvas = document.querySelector('.offcanvas-menu');
  const closeBtn = document.querySelector('.offcanvas-close');
  const backdrop = document.querySelector('.offcanvas-backdrop');

  burger.addEventListener('click', () => {
    offcanvas.classList.add('active');
    backdrop.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    offcanvas.classList.remove('active');
    backdrop.classList.remove('active');
  });

  backdrop.addEventListener('click', () => {
    offcanvas.classList.remove('active');
    backdrop.classList.remove('active');
  });