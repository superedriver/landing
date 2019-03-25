window.onload = function() {
  const headerSlider = document.querySelectorAll('.header-slider')[0];
  startSlider(headerSlider);
  const quotesSlider = document.querySelectorAll('.quotes-slider')[0];
  startSlider(quotesSlider);
};

function startSlider(slider) {
    const interval = 3000;
    const slidesSelector = '.slide-list .slide-item';
    const slidesControlsSelector = '.toggle-list .toggle-item';

    let slides = slider.querySelectorAll(slidesSelector);
    let sliderControls = slider.querySelectorAll(slidesControlsSelector);

    let currentIndex = 0;
    let slideInterval = setInterval(nextSlide, interval);

    sliderControls.forEach(function(item, index) {
      item.addEventListener('click', setCurrentSlide.bind(null, index))
    });

    function nextSlide() {
      slides[currentIndex].classList.remove('current');
      sliderControls[currentIndex].classList.remove('current');

      currentIndex = (currentIndex+1)%slides.length;

      slides[currentIndex].classList.add('current');
      sliderControls[currentIndex].classList.add('current');
    }

    function setCurrentSlide(index) {
      clearInterval(slideInterval);
      slider.querySelectorAll(`${slidesSelector}.current`)[0]
        .classList.remove('current');
      slider.querySelectorAll(`${slidesControlsSelector}.current`)[0]
        .classList.remove('current');

      currentIndex = index;

      slides[currentIndex].classList.add('current');
      sliderControls[currentIndex].classList.add('current');
      slideInterval = setInterval(nextSlide, interval);
    }
}