// Функция для копирования IP-адреса и отображения уведомления
function copyIP(ipAddress, serverName) {
    navigator.clipboard.writeText(ipAddress).then(function() {
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = `${serverName} IP скопирован: ${ipAddress}`;
        
        // --- СТИЛИЗАЦИЯ ---
        // Добавили transition для плавности и начальную opacity 0
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#a74cafff';
        notification.style.color = 'white';
        notification.style.padding = '10px 20px';
        notification.style.borderRadius = '5px';
        notification.style.zIndex = '1000';
        notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        notification.style.fontFamily = "'Roboto', sans-serif";
        
        // Анимационные стили
        notification.style.opacity = '0'; 
        notification.style.transition = 'opacity 0.5s ease'; 
        notification.style.pointerEvents = 'none'; // Чтобы уведомление не перекрывало клики
        
        document.body.appendChild(notification);
        
        // --- ХАК ДЛЯ ЗАПУСКА АНИМАЦИИ ПОЯВЛЕНИЯ ---
        // Читаем offsetHeight, чтобы браузер применил стили выше перед изменением opacity
        notification.offsetHeight; 
        
        // Запускаем появление
        notification.style.opacity = '1';
        
        // --- ЛОГИКА ИСЧЕЗНОВЕНИЯ ---
        setTimeout(function() {
            // Начинаем исчезновение
            notification.style.opacity = '0';
            
            // Удаляем элемент ПОСЛЕ того, как анимация исчезновения закончится (0.5s)
            setTimeout(function() {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 500); // Время должно совпадать с transition (0.5s)
            
        }, 1400); // Время отображения уведомления
    }).catch(function(err) {
        console.error('Ошибка при копировании IP-адреса: ', err);
    });
}

// Обработчики событий (остались без изменений)
document.addEventListener('DOMContentLoaded', function() {
    const badges = [
        { selector: '.badge.first', ip: 's1.saturn.ru', name: 'Survival' },
        { selector: '.badge.second', ip: 's2.saturn.ru', name: 'Minigames' },
        { selector: '.badge.third', ip: 's3.saturn.ru', name: 'Factions' }
    ];

    badges.forEach(badge => {
        const el = document.querySelector(badge.selector);
        if(el) {
            el.style.cursor = 'pointer';
            el.title = 'Кликните для копирования IP';
            el.addEventListener('click', function() {
                copyIP(badge.ip, badge.name);
            });
        }
    });
});