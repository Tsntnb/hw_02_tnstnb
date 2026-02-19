document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.getElementById('dots');
    const captionEl = document.getElementById('slider-caption');

    // Массив подписей — порядок должен совпадать с изображениями!
    const captions = [
        "Церковь на закате",
        "Церковь в чёрно-белом",
        "Рисунок церкви",
        "Смешарики осенью",
        "Чёрный котик осенью",
        "Человек с тыквенной башкой"
    ];

    let currentIndex = 0;
    const totalImages = images.length;

    // Создаём точки
    images.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        captionEl.textContent = captions[currentIndex];

        const dots = dotsContainer.querySelectorAll('button');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateSlider();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    updateSlider();
});