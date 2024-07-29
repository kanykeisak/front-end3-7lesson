document.addEventListener("DOMContentLoaded", async () => {
    const cardContainer = document.querySelector('.card');
    const URL = 'https://jsonplaceholder.typicode.com/posts';

    const fetchData = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
            return [];
        }
    };

    const createCard = (title, body) => {
        const card = document.createElement('div');
        card.className = 'card_person';
        card.innerHTML = `
            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" alt="Placeholder Image">
            <h2>${title}</h2>
            <p>${body}</p>
        `;
        return card;
    };

    const renderCards = async () => {
        const data = await fetchData();
        data.forEach(post => {
            const card = createCard(post.title, post.body);
            cardContainer.appendChild(card);
        });
    };

    renderCards();
});
