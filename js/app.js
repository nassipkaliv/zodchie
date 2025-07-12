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


    document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".project-features__item");
    const showMoreBtn = document.getElementById("showMoreBtn");
    const maxVisible = 10;

    // Сначала показать первые 10
    items.forEach((item, index) => {
      if (index < maxVisible) {
        item.classList.add("visible");
      }
    });

    showMoreBtn.addEventListener("click", () => {
      items.forEach(item => item.classList.add("visible"));
      showMoreBtn.style.display = "none";
    });
  });