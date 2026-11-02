export function loadHome() {
    const content = document.getElementById('content');
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('tab-content'); // Для анимации (Задание 3.3)

    const header = document.createElement('h1');
    header.textContent = 'Crumble Cafe';
    homeDiv.appendChild(header);

    const description = document.createElement('p');
    description.textContent = 'Лучшая выпечка в городе, приготовленная с любовью.';
    homeDiv.appendChild(description);

    content.appendChild(homeDiv);
}