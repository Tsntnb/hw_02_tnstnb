function showServerInfo(serverType) {
    const containers = document.querySelectorAll('.server-info-content');
    containers.forEach(container => {
        container.style.display = 'none';
    });
    
    document.getElementById(`${serverType}-info`).style.display = 'block';
    
    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => {
        badge.classList.remove('selected');
    });
    
    const selectedBadge = document.getElementById(`${serverType}-badge`);
    if(selectedBadge) {
        selectedBadge.classList.add('selected');
    }
}

// изображения для галереи
const vanillaImages = [
    'images/vanilla1.png',
    'images/vanilla2.png',
    'images/vanilla3.png',
    'images/vanilla4.png'
];

const survivalImages = [
    'images/survival1.png',
    'images/survival2.png',
    'images/survival3.png',
    'images/survival4.png'
];

let currentVanillaIndex = 0;
let currentSurvivalIndex = 0;

function showImage(serverType, index) {
    const imageArray = serverType === 'vanilla' ? vanillaImages : survivalImages;
    const currentIndexVar = serverType === 'vanilla' ? 'currentVanillaIndex' : 'currentSurvivalIndex';
    
    if(index < 0) {
        index = imageArray.length - 1;
    } else if(index >= imageArray.length) {
        index = 0;
    }
    
    if(serverType === 'vanilla') {
        currentVanillaIndex = index;
    } else {
        currentSurvivalIndex = index;
    }
    
    const imgElement = document.getElementById(`${serverType}-current-image`);
    if(imgElement) {
        imgElement.src = imageArray[index];
    }
    
    updateIndicators(serverType);
}

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
    
    indicatorsContainer.innerHTML = '';
    
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

function initializeGalleries() {
    if(vanillaImages.length > 0) {
        showImage('vanilla', 0);
    }
    
    if(survivalImages.length > 0) {
        showImage('survival', 0);
    }
}
/* Скрытие инфы и инициализация галерей */
document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.server-info-content');
    containers.forEach(container => {
        container.style.display = 'none';
    });
    
    initializeGalleries();
});