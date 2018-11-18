window.onload = function() {
  const interval = 3000;
  const slidesSelector = '.slide-list .slide-item';
  const slidesControlsSelector = '.toggle-list .toggle-item';

  let slides = document.querySelectorAll(slidesSelector);
  let slidesControls = document.querySelectorAll(slidesControlsSelector);
  let currentIndex = 0;
  let slideInterval = setInterval(nextSlide, interval);

  slidesControls.forEach(function(item, index) {
    item.addEventListener('click', setCurrentSlide.bind(null, index))
  });

  function nextSlide() {
    slides[currentIndex].classList.remove('current');
    slidesControls[currentIndex].classList.remove('current');

    currentIndex = (currentIndex+1)%slides.length;

    slides[currentIndex].classList.add('current');
    slidesControls[currentIndex].classList.add('current');
  }

  function setCurrentSlide(index) {
    clearInterval(slideInterval);
    document.querySelectorAll(`${slidesSelector}.current`)[0]
      .classList.remove('current');
    document.querySelectorAll(`${slidesControlsSelector}.current`)[0]
      .classList.remove('current');

    currentIndex = index;

    slides[currentIndex].classList.add('current');
    slidesControls[currentIndex].classList.add('current');
    slideInterval = setInterval(nextSlide, interval);
  }
};
