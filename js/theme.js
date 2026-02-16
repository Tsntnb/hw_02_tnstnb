// Проверяем сохраненную тему в localStorage или используем темную по умолчанию
const savedTheme = localStorage.getItem('theme') || 'dark';

// Устанавливаем тему при загрузке страницы
document.body.classList.toggle('light-theme', savedTheme === 'light');

// Функция переключения темы
function toggleTheme() {
    const body = document.body;
    const isLight = body.classList.contains('light-theme');
    
    if (isLight) {
        body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    }
}

// Находим все кнопки переключения темы и добавляем обработчик события
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });
});