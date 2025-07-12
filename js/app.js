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

const openButtons = document.querySelectorAll("[data-target]");

openButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetSelector = btn.getAttribute("data-target");
    const modal = document.querySelector(targetSelector);
    if (modal) {
      modal.classList.add("show");
    }
  });
});

// Закрытие по фону
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.classList.remove("show");
  }
});

// Закрытие по ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" || e.key === "Esc") {
    document.querySelectorAll(".modal-overlay.show").forEach((modal) => {
      modal.classList.remove("show");
    });
  }
});

// Закрытие по кнопке .modal-close
const closeButtons = document.querySelectorAll(".modal-close");

closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal-overlay");
    if (modal) {
      modal.classList.remove("show");
    }
  });
});
