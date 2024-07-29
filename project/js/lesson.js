// PHONE BLOCK
// LESSON 1
const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResults = document.querySelector("#phone_result");

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)){
        phoneResults.innerHTML = 'OK'
        phoneResults.style.color = 'green'
    } else {
        phoneResults.innerHTML = 'NOT OK'
        phoneResults.style.color = 'red'
    }
}

// LESSON 2


//TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabParent = document.querySelector('.tab_content_items');

let currentIndex = 0;
const intervalTime = 3000; // Интервал в миллисекундах (3 секунды)

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none';
    });
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (index) => {
    tabContentBlocks[index].style.display = 'block';
    tabs[index].classList.add('tab_content_item_active');
};

const autoChangeTab = () => {
    hideTabContent();
    currentIndex = (currentIndex + 1) % tabs.length;
    showTabContent(currentIndex);
};

// Показываем первую вкладку сразу
hideTabContent();
showTabContent(currentIndex);

// Устанавливаем автоматическое изменение вкладок
let intervalId = setInterval(autoChangeTab, intervalTime);

// Обработчик клика на вкладки
tabParent.addEventListener('click', (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, index) => {
            if (event.target === tab) {
                hideTabContent();
                showTabContent(index);
                currentIndex = index;
                clearInterval(intervalId); // Очищаем предыдущий интервал
                intervalId = setInterval(autoChangeTab, intervalTime); // Устанавливаем новый интервал
            }
        });
    }
});

// Converter

const usdInput = document.querySelector("#usd");
const somInput = document.querySelector("#som");
const eurInput = document.querySelector("#eur");

const converter = (input, targetInput, targetOutput) => {
    input.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('Get','../data/converter.json');
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)
            if (input.id === 'som') {
                targetInput.value = (input.value / data.usd1).toFixed(2)
                targetOutput.value = (input.value / data.eur1).toFixed(2)
            }
            if (input.id === 'usd') {
                targetInput.value = (input.value * data.usd1).toFixed(2)
                targetOutput.value = (input.value * data.eur2).toFixed(2)
            }
            if (input.id === 'eur') {
                targetInput.value = (input.value * data.usd2).toFixed(2)
                targetOutput.value = (input.value * data.som).toFixed(2)
            }
            if (input.value === '') targetInput.value = '', targetOutput.value = ''
        }

    }
}
converter(usdInput, somInput, eurInput)
converter(somInput, usdInput, eurInput)
converter(eurInput, usdInput, somInput)

// XSH
// somInput.oninput = () => {
//     const request = new XMLHttpRequest()
//     request.open('Get','../data/converter.json');
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//
//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         usdInput.value = (somInput.value / data.usd).toFixed(2)
//     }
// }
// usdInput.oninput = () => {
//     const request = new XMLHttpRequest()
//     request.open('Get','../data/converter.json');
//     request.setRequestHeader('Content-type', 'application/json') // 3 - указывание заголовка запроса
//     request.send() // 4 - отправка запроса
//
//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         somInput.value = (usdInput.value * data.usd).toFixed(2)
//     }
// }



// Принципы в программировании

// DRY - Don't repeat yourself - Не повторяй самого сабя

// KISS - keep it simple, stupid! - Делай проще, идиот!
// KISS - keep it super stupid! - Делай супер просто!
// SOLID

//  CARD SWITCHER

const cardBlock = document.querySelector(".card");
const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-prev");
let count = 1

const fetchData = async (id) => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const data = await response.json();
        cardBlock.innerHTML = `
        <p>${data.title}</p>
        <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
        <span>${data.id}</span>
    `;
    } catch (e){
        console.log(e)
    }
};

fetchData(count);

btnNext.onclick = () => {
    count = count === 200 ? 1 : count + 1;
    fetchData(count);
};

btnPrev.onclick = () => {
    count = count === 1 ? 200 : count - 1;
    fetchData(count);
};

const fetchPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json();
        console.log(data);
    }catch (e) {
        console.log(e)
    }
}

// WEATHER

const searchInput = document.querySelector(".cityName");
const temp = document.querySelector('.temp');
const city = document.querySelector('.city');

// query params - параметры запроса

const URL_API ='http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'

searchInput.oninput = async (event) => {
    try {
        const response = await fetch(`${URL_API}?q=${event.target.value}&appid=${API_KEY}`)
        const data = await response.json()
        city.innerHTML = data.name ? data.name: 'Город не найден ...'
        temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273) + '&deg;C' : '...'
    } catch (e) {
        console.log(e)
    }}

fetchPosts()
// optional chaining -опциональная цепочка
// ?.


// const locationPlace = {
//     id:12,
//     address: {
//         // street: 'Ibraimova',
//         number: 103
//
//     }
// }
//
// console.log(locationPlace.address?.street)























