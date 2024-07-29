// MODAL

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector("#btn-get");
const modalCloseButton = document.querySelector(".modal_close");

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
};

modalTrigger.onclick = () => openModal();
modalCloseButton.onclick = () => closeModal();
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
};

const modalTimer = setTimeout(openModal, 10000);


const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        openModal();
        window.removeEventListener('scroll', handleScroll);
    }
};

window.addEventListener('scroll', handleScroll);



// TELEGRAM BOT

 const form = document.querySelector("form");
 const token = '7223981661:AAEvxhZ5hgSEgW1eJQzpw9LsoE3Ucxo_1gs'
 const telegramURL_API = `https://api.telegram.org/bot${token}/sendMessage`
 const chat_id = '@projectfront_end_group'


 form.onsubmit = async (event) => {
     event.preventDefault()

     const {phone, name} = Object.fromEntries(new FormData(form).entries())
     const text = `name: ${name}\nphone: ${phone}`

     await fetch(telegramURL_API,{
         method: 'POST',
         headers: {"Content-type": "application/json"},
         body: JSON.stringify({chat_id: chat_id, text}),
     })

     closeModal()
 }

//  DICT - dictionary - словарь
















