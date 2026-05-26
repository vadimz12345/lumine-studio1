document.addEventListener('DOMContentLoaded', () => {
    
    // 1. МОБИЛЬНОЕ МЕНЮ
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileNav = document.getElementById('mobileNav');

    if (mobileToggle && mobileNav) {
        mobileToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }

    // 2. ФИЛЬТРАЦИЯ ПОРТФОЛИО (для страницы portfolio.html)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-item');

    if (filterBtns.length > 0 && projects.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Переключаем активную кнопку
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                // Фильтруем проекты
                projects.forEach(project => {
                    if (filter === 'all' || project.getAttribute('data-category') === filter) {
                        project.classList.remove('hidden');
                        setTimeout(() => project.style.opacity = '1', 50);
                    } else {
                        project.style.opacity = '0';
                        setTimeout(() => project.classList.add('hidden'), 300);
                    }
                });
            });
        });
    }

    // 3. АККОРДЕОН FAQ И ВКЛАДКИ КАТЕГОРИЙ (для страницы faq.html)
    const tabs = document.querySelectorAll('.faq-tab');
    const categories = document.querySelectorAll('.faq-category');
    const questions = document.querySelectorAll('.faq-question');

    if (tabs.length > 0 && categories.length > 0) {
        // Переключение категорий
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                categories.forEach(c => c.classList.remove('active'));
                
                tab.classList.add('active');
                document.getElementById(tab.getAttribute('data-target')).classList.add('active');
            });
        });

        // Открытие/закрытие самих вопросов
        questions.forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                const isActive = item.classList.contains('active');
                
                // Закрываем все остальные открытые вопросы в этой категории
                const currentCategory = item.parentElement;
                currentCategory.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
                
                // Если он был закрыт, то открываем
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }
});