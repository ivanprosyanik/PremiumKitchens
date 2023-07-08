document.addEventListener("DOMContentLoaded", () => {
  const portfolioSlider = new Swiper('.portfolio__content', {
    slidesPerView: 'auto',
    spaceBetween: 42,
    pagination: {
      el: ".portfolio__dots",
      bulletClass: "portfolio__dot",
      bulletActiveClass: "portfolio__dot--active",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        centeredSlides: true,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },

      992: {
        slidesPerView: 'auto',
        spaceBetween: 42,
      }
    }
  });

  const burger = document.querySelector('.burger');
  const headerList = document.querySelector('.header__list');
  const body = document.querySelector('body')

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    headerList.classList.toggle('active');
    body.classList.toggle('lock');
  });

  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== headerList) {
      body.classList.remove('lock');
      headerList.classList.remove('active');
      burger.classList.remove('burger--active');
    };
  });

  if (window.innerWidth < 577) {
    const materialsSwiper = new Swiper('.materials__slider', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: true,
      pagination: {
        el: ".materials__dots",
        bulletClass: "materials__dot",
        bulletActiveClass: "materials__dot--active",
        clickable: true,
      }
    });
  };
});