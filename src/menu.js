import menuData from './menu-data.json';

// Импортируем картинки (убедитесь, что они лежат в src/images/)
import croissantImg from './images/croissant.jpg';
import tiramisuImg from './images/tiramisu.jpg';
import cheesecakeImg from './images/cheesecake.jpg';

export function loadMenu() {
    const content = document.getElementById('content');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('tab-content');

    const visits = Number(localStorage.getItem('menuVisits') || 0) + 1;
    localStorage.setItem('menuVisits', visits);

    const title = document.createElement('h1');
    title.textContent = 'Меню';
    menuDiv.appendChild(title);

    const counter = document.createElement('p');
    counter.textContent = `Вы открывали это меню ${visits} раз`;
    counter.style.fontStyle = 'italic';
    menuDiv.appendChild(counter);

    // Сопоставляем названия блюд и картинки
    const images = {
        'Круассан': croissantImg,
        'Тирамису': tiramisuImg,
        'Чизкейк': cheesecakeImg
    };

    menuData.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('menu-card');
        
        // Создаем картинку
        const img = document.createElement('img');
        img.src = images[item.name] || '';
        img.alt = item.name;
        
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p><strong>${item.price} ₽</strong></p>
        `;
        
        // Вставляем картинку в начало карточки
        card.prepend(img);
        menuDiv.appendChild(card);
    });

    content.appendChild(menuDiv);
}