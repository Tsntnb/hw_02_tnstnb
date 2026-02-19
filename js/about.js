document.addEventListener('DOMContentLoaded', () => {
    // Функция для инициализации галереи
    function initGallery(containerId, dotsId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const slides = container.querySelector('.slides');
        const images = container.querySelectorAll('.slides img');
        const prevBtn = container.querySelector('.prev');
        const nextBtn = container.querySelector('.next');
        const dotsContainer = document.getElementById(dotsId);
        const captionEl = container.querySelector('.slider-caption');

        // Подписи для каждой галереи
        let captions = [];
        if (containerId.includes('vanilla')) {
            captions = [
                "Скриншот Ванилла 1",
                "Скриншот Ванилла 2", 
                "Скриншот Ванилла 3",
                "Скриншот Ванилла 4"
            ];
        } else if (containerId.includes('survival')) {
            captions = [
                "Скриншот Выживание 1",
                "Скриншот Выживание 2",
                "Скриншот Выживание 3",
                "Скриншот Выживание 4"
            ];
        }

        let currentIndex = 0;
        const totalImages = images.length;

        // Создаём точки
        if (dotsContainer) {
            dotsContainer.innerHTML = '';
            for (let i = 0; i < totalImages; i++) {
                const dot = document.createElement('button');
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }
        }

        function updateSlider() {
            if (slides) {
                slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
            
            if (captionEl && captions[currentIndex]) {
                captionEl.textContent = captions[currentIndex];
            }

            if (dotsContainer) {
                const dots = dotsContainer.querySelectorAll('button');
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === currentIndex);
                });
            }
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

        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);

        updateSlider();
    }

    // Инициализируем галереи при загрузке
    initGallery('vanilla-info', 'vanilla-dots');
    initGallery('survival-info', 'survival-dots');

    // Показываем информацию о сервере
    function showServerInfo(serverType) {
        // Скрыть все блоки информации
        document.querySelectorAll('.server-info-content').forEach(content => {
            content.style.display = 'none';
        });

        // Удалить активный класс со всех бейджей
        document.querySelectorAll('.badge').forEach(badge => {
            badge.classList.remove('active');
        });

        // Показать выбранный блок информации
        const selectedContent = document.getElementById(`${serverType}-info`);
        if (selectedContent) {
            selectedContent.style.display = 'block';
            
            // Добавить активный класс к выбранному бейджу
            const selectedBadge = document.getElementById(`${serverType}-badge`);
            if (selectedBadge) {
                selectedBadge.classList.add('active');
            }
            
            // Переинициализировать галерею для выбранного сервера
            setTimeout(() => {
                initGallery(`${serverType}-info`, `${serverType}-dots`);
            }, 10);
        }
    }

    // Делаем функцию глобальной, чтобы она была доступна из HTML
    window.showServerInfo = showServerInfo;

    // По умолчанию показываем информацию о ванилле
    showServerInfo('vanilla');
});