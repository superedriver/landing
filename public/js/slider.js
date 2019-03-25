window.onload = function () {
    var headerSlider = document.querySelectorAll('.header-slider')[0];
    startSlider(headerSlider);
    var quotesSlider = document.querySelectorAll('.quotes-slider')[0];
    startSlider(quotesSlider);
};
function startSlider(slider) {
    var interval = 3000;
    var slidesSelector = '.slide-list .slide-item';
    var slidesControlsSelector = '.toggle-list .toggle-item';
    var slides = slider.querySelectorAll(slidesSelector);
    var sliderControls = slider.querySelectorAll(slidesControlsSelector);
    var currentIndex = 0;
    var slideInterval = setInterval(nextSlide, interval);
    sliderControls.forEach(function (item, index) {
        item.addEventListener('click', setCurrentSlide.bind(null, index));
    });
    function nextSlide() {
        slides[currentIndex].classList.remove('current');
        sliderControls[currentIndex].classList.remove('current');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('current');
        sliderControls[currentIndex].classList.add('current');
    }
    function setCurrentSlide(index) {
        clearInterval(slideInterval);
        slider.querySelectorAll(slidesSelector + ".current")[0]
            .classList.remove('current');
        slider.querySelectorAll(slidesControlsSelector + ".current")[0]
            .classList.remove('current');
        currentIndex = index;
        slides[currentIndex].classList.add('current');
        sliderControls[currentIndex].classList.add('current');
        slideInterval = setInterval(nextSlide, interval);
    }
}
