import './style.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

const content = document.getElementById('content');

function createNav() {
    const nav = document.createElement('nav');

    const tabs = [
        { label: 'Главная',  load: loadHome },
        { label: 'Меню',     load: loadMenu },
        { label: 'Контакты', load: loadContact },
    ];

    tabs.forEach((tab, i) => {
        const btn = document.createElement('button');
        btn.textContent = tab.label;
        btn.addEventListener('click', () => clearAndLoad(tab.load, btn));
        if (i === 0) btn.classList.add('active');   // стартовая вкладка
        nav.appendChild(btn);
    });

    return nav;
}

function clearAndLoad(loadFunction, btn) {
    // 1. снять active со всех, поставить на нажатую
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 2. удалить старый контент вкладки (навигацию не трогаем)
    document.querySelectorAll('.tab-content').forEach(el => el.remove());

    // 3. загрузить новую вкладку
    loadFunction();
}

// ── старт ──
content.appendChild(createNav());
loadHome();