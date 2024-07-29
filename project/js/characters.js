window.onload = () => {
    const request = new XMLHttpRequest(); // 1 - создание запроса
    request.open('GET', '../data/persons.json'); // 2 - указание метода запроса и пути
    request.setRequestHeader('Content-type', 'application/json'); // 3 - указывание заголовка запроса
    request.send(); // 4 - отправка запроса

    request.onload = () => {
        const data = JSON.parse(request.response);
        const personsDiv = document.querySelector('.persons');
        personsDiv.innerHTML = ''; // Очищаем предыдущие данные

        // Создаём HTML-код для всех карточек
        data.forEach(person => {
            const personBlock = document.createElement('div');
            personBlock.className = 'person_block'; // Устанавливаем класс

            personBlock.innerHTML = `
                <div class="person_photo">
                    <img src="${person.person_photo}" alt="${person.name}">
                </div>
                <p>${person.name}</p>
                <p>Возраст: ${person.age}</p>
            `;

            personsDiv.appendChild(personBlock);
        });

        console.log(data); // Выводим данные в консоль
    };

    request.onerror = () => {
        console.error('Error loading the JSON data');
    };
};
