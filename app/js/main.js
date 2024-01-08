document.addEventListener("DOMContentLoaded", () => {
  const portfolioSlider = new Swiper('.portfolio__content', {
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

      576: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 32,
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
      },
      breakpoints: {
        320: {
          spaceBetween: 20,
        },

        576: {
          spaceBetween: 25,
        }
      }
    });
  };

  // // Получаем ссылки на элементы меню
  // const menuLinks = document.querySelectorAll('.header__link');

  // // Добавляем обработчик события "click" для каждой ссылки
  // menuLinks.forEach(link => {
  //   link.addEventListener('click', scrollToSection);
  // });

  // // Функция для плавного перехода к секции
  // function scrollToSection(event) {
  //   event.preventDefault(); // Предотвращаем стандартное поведение ссылки

  //   // Получаем ID секции, на которую нужно перейти (из атрибута href ссылки)
  //   const targetId = this.getAttribute('href');

  //   // Получаем элемент целевой секции
  //   const targetSection = document.querySelector(targetId);

  //   // Проверяем, что секция существует
  //   if (targetSection) {
  //     // Вычисляем позицию секции относительно верхней части страницы
  //     const targetPosition = targetSection.offsetTop;

  //     // Осуществляем плавный скроллинг до позиции секции
  //     window.scrollTo({
  //       top: targetPosition,
  //       behavior: 'smooth'
  //     });
  //   }
  // }

  const menuLinks = document.querySelectorAll(".header__link");

  menuLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const id = this.getAttribute("href");
      const targetSection = document.querySelector(id);

      if (targetSection) {
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });


  const scrollToTop = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', () => {
    scrollToTop.classList.remove('active');
    if (window.scrollY > 100) {
      scrollToTop.classList.add('active');
    }
  });

  scrollToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  });

  const whyProjectsSlider = new Swiper('.projects__slider', {
    navigation: {
      nextEl: '.projects__btn--next',
      prevEl: '.projects__btn--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        centeredSlides: true,
        spaceBetween: 5,
      },

      576: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 5,
      },

      768: {
        spaceBetween: 10,
      },

      992: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 25,
      },
    }
  });
});