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

// По умолчанию показываем информацию о Ванилла сервере
// При загрузке страницы не показываем никакой информации о сервере
document.addEventListener('DOMContentLoaded', function() {
    // Скрываем всю информацию о серверах при загрузке
    const containers = document.querySelectorAll('.server-info-content');
    containers.forEach(container => {
        container.style.display = 'none';
    });
});