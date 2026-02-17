// Функция для копирования IP-адреса и отображения уведомления
function copyIP(ipAddress, serverName) {
    // Копируем IP-адрес в буфер обмена
    navigator.clipboard.writeText(ipAddress).then(function() {
        // Создаем элемент уведомления
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = `${serverName} IP скопирован: ${ipAddress}`;
        
        // Стилизация уведомления
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#4CAF50';
        notification.style.color = 'white';
        notification.style.padding = '10px 20px';
        notification.style.borderRadius = '5px';
        notification.style.zIndex = '1000';
        notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        notification.style.fontFamily = "'Roboto', sans-serif";
        
        // Добавляем уведомление на страницу
        document.body.appendChild(notification);
        
        // Удаляем уведомление через 3 секунды
        setTimeout(function() {
            document.body.removeChild(notification);
        }, 3000);
    }).catch(function(err) {
        console.error('Ошибка при копировании IP-адреса: ', err);
    });
}

// Добавляем обработчики событий для бейджей при загрузке DOM
document.addEventListener('DOMContentLoaded', function() {
    // Находим бейдж Survival и добавляем обработчик
    const survivalBadge = document.querySelector('.badge.first');
    if(survivalBadge) {
        survivalBadge.style.cursor = 'pointer';
        survivalBadge.title = 'Кликните для копирования IP';
        survivalBadge.addEventListener('click', function() {
            copyIP('s1.saturn.ru', 'Survival');
        });
    }
    
    // Находим бейдж Minigames и добавляем обработчик
    const minigamesBadge = document.querySelector('.badge.second');
    if(minigamesBadge) {
        minigamesBadge.style.cursor = 'pointer';
        minigamesBadge.title = 'Кликните для копирования IP';
        minigamesBadge.addEventListener('click', function() {
            copyIP('s2.saturn.ru', 'Minigames');
        });
    }
    
    // Находим бейдж Factions и добавляем обработчик
    const factionsBadge = document.querySelector('.badge.third');
    if(factionsBadge) {
        factionsBadge.style.cursor = 'pointer';
        factionsBadge.title = 'Кликните для копирования IP';
        factionsBadge.addEventListener('click', function() {
            copyIP('s3.saturn.ru', 'Factions');
        });
    }
});