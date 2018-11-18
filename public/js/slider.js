window.onload = function () {
    var interval = 3000;
    var slidesSelector = '.slide-list .slide-item';
    var slidesControlsSelector = '.toggle-list .toggle-item';
    var slides = document.querySelectorAll(slidesSelector);
    var slidesControls = document.querySelectorAll(slidesControlsSelector);
    var currentIndex = 0;
    var slideInterval = setInterval(nextSlide, interval);
    slidesControls.forEach(function (item, index) {
        item.addEventListener('click', setCurrentSlide.bind(null, index));
    });
    function nextSlide() {
        slides[currentIndex].classList.remove('current');
        slidesControls[currentIndex].classList.remove('current');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('current');
        slidesControls[currentIndex].classList.add('current');
    }
    function setCurrentSlide(index) {
        clearInterval(slideInterval);
        document.querySelectorAll(slidesSelector + ".current")[0]
            .classList.remove('current');
        document.querySelectorAll(slidesControlsSelector + ".current")[0]
            .classList.remove('current');
        currentIndex = index;
        slides[currentIndex].classList.add('current');
        slidesControls[currentIndex].classList.add('current');
        slideInterval = setInterval(nextSlide, interval);
    }
};
