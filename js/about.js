function showServerInfo(serverType) {
    // Скрыть все контейнеры информации
    const containers = document.querySelectorAll('.server-info-content');
    containers.forEach(container => {
        container.style.display = 'none';
    });
    
    // Показать выбранный контейнер
    document.getElementById(`${serverType}-info`).style.display = 'block';
    
    // Обновить стиль бейджей
    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => {
        badge.classList.remove('selected');
    });
    
    const selectedBadge = document.getElementById(`${serverType}-badge`);
    if(selectedBadge) {
        selectedBadge.classList.add('selected');
    }
}

// Определяем изображения для галерей
const vanillaImages = [
    'images/screenshots/vanilla1.png',
    'images/screenshots/vanilla2.png'
];

const survivalImages = [
    'images/screenshots/survival1.png',
    'images/screenshots/survival2.png',
    'images/screenshots/survival3.png',
    'images/screenshots/survival4.png'
];

// Текущие индексы слайдов для каждой галереи
let currentVanillaIndex = 0;
let currentSurvivalIndex = 0;

// Функция для отображения изображения в галерее
function showImage(serverType, index) {
    const imageArray = serverType === 'vanilla' ? vanillaImages : survivalImages;
    const currentIndexVar = serverType === 'vanilla' ? 'currentVanillaIndex' : 'currentSurvivalIndex';
    
    // Убедимся, что индекс в пределах массива
    if(index < 0) {
        index = imageArray.length - 1;
    } else if(index >= imageArray.length) {
        index = 0;
    }
    
    // Обновляем текущий индекс
    if(serverType === 'vanilla') {
        currentVanillaIndex = index;
    } else {
        currentSurvivalIndex = index;
    }
    
    // Находим элемент изображения и обновляем его
    const imgElement = document.getElementById(`${serverType}-current-image`);
    if(imgElement) {
        imgElement.src = imageArray[index];
    }
    
    // Обновляем индикаторы
    updateIndicators(serverType);
}

// Функция для переключения слайда
function changeSlide(serverType, direction) {
    let currentIndex;
    
    if(serverType === 'vanilla') {
        currentIndex = currentVanillaIndex + direction;
        if(currentIndex < 0) currentIndex = vanillaImages.length - 1;
        if(currentIndex >= vanillaImages.length) currentIndex = 0;
        currentVanillaIndex = currentIndex;
    } else {
        currentIndex = currentSurvivalIndex + direction;
        if(currentIndex < 0) currentIndex = survivalImages.length - 1;
        if(currentIndex >= survivalImages.length) currentIndex = 0;
        currentSurvivalIndex = currentIndex;
    }
    
    showImage(serverType, currentIndex);
}

// Функция для обновления индикаторов
function updateIndicators(serverType) {
    const indicatorsContainer = document.getElementById(`${serverType}-indicators`);
    if(!indicatorsContainer) return;
    
    const imageArray = serverType === 'vanilla' ? vanillaImages : survivalImages;
    let currentIndex;
    
    if(serverType === 'vanilla') {
        currentIndex = currentVanillaIndex;
    } else {
        currentIndex = currentSurvivalIndex;
    }
    
    // Очищаем контейнер индикаторов
    indicatorsContainer.innerHTML = '';
    
    // Создаем индикаторы
    for(let i = 0; i < imageArray.length; i++) {
        const indicator = document.createElement('span');
        indicator.className = 'indicator';
        if(i === currentIndex) {
            indicator.classList.add('active');
        }
        indicator.onclick = () => showImage(serverType, i);
        indicatorsContainer.appendChild(indicator);
    }
}

// Функция для инициализации галерей
function initializeGalleries() {
    // Инициализируем обе галереи
    if(vanillaImages.length > 0) {
        showImage('vanilla', 0);
    }
    
    if(survivalImages.length > 0) {
        showImage('survival', 0);
    }
}

// По умолчанию показываем информацию о Ванилла сервере
// При загрузке страницы не показываем никакой информации о сервере
document.addEventListener('DOMContentLoaded', function() {
    // Скрываем всю информацию о серверах при загрузке
    const containers = document.querySelectorAll('.server-info-content');
    containers.forEach(container => {
        container.style.display = 'none';
    });
    
    // Инициализируем галереи
    initializeGalleries();
});