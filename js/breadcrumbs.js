// Скрипт для скрытия хлебных крошек при прокрутке вниз
document.addEventListener('DOMContentLoaded', function() {
    const breadcrumbs = document.querySelector('.breadcrumbs');
    
    if (!breadcrumbs) {
        // Если на странице нет хлебных крошек, выходим
        return;
    }
    
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Прокрутка вниз и пользователь прокрутил более чем на 100px
            breadcrumbs.style.opacity = '0';
            breadcrumbs.style.visibility = 'hidden';
            breadcrumbs.style.transform = 'translateY(-10px)';
        } else if (scrollTop < lastScrollTop || scrollTop <= 100) {
            // Прокрутка вверх или вверху страницы
            breadcrumbs.style.opacity = '1';
            breadcrumbs.style.visibility = 'visible';
            breadcrumbs.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
});