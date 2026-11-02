export function loadContact() {
    const content = document.getElementById('content');
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('tab-content');

    contactDiv.innerHTML = `
        <h1>Контакты</h1>
        <p>Адрес: г. Москва, ул. Пирожковая, д. 12</p>
        <p>Телефон: +7 (999) 123-45-67</p>
        <p>Часы работы: ежедневно с 9:00 до 22:00</p>
    `;

    // Задание 2.3: Кнопка бронирования
    const bookBtn = document.createElement('button');
    bookBtn.textContent = 'Забронировать столик';
    bookBtn.style.marginTop = '10px';
    bookBtn.addEventListener('click', () => {
        alert('Столик забронирован! Мы вам перезвоним.');
    });
    contactDiv.appendChild(bookBtn);

    // Задание 3.1: Форма с валидацией
    const form = document.createElement('form');
    form.style.marginTop = '20px';
    form.innerHTML = `
        <div style="margin-bottom: 10px;">
            <input name="name" placeholder="Имя (мин. 2 символа)" style="padding: 5px;">
        </div>
        <div style="margin-bottom: 10px;">
            <input name="email" placeholder="Email" style="padding: 5px;">
        </div>
        <div style="margin-bottom: 10px;">
            <textarea name="message" placeholder="Сообщение"></textarea>
        </div>
        <button type="submit">Отправить</button>
        <p class="error" style="color:red; display:none; margin-top: 5px;"></p>
    `;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const errorEl = form.querySelector('.error');

        // Сброс красных рамок
        form.querySelectorAll('input, textarea').forEach(el => el.style.border = '');

        if (name.length < 2) {
            form.name.style.border = '2px solid red';
            errorEl.textContent = 'Имя должно быть не короче 2 символов';
            errorEl.style.display = 'block';
            return;
        }

        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(email)) {
            form.email.style.border = '2px solid red';
            errorEl.textContent = 'Введите корректный email';
            errorEl.style.display = 'block';
            return;
        }

        errorEl.style.display = 'none';
        alert('Спасибо, ' + name + '!');
        form.reset();
    });

    contactDiv.appendChild(form);
    content.appendChild(contactDiv);
}