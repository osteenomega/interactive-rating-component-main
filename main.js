const buttonrating = document.getElementsByClassName('btn--rating');
const rate = document.getElementById('rate');

for (let i = 1; i < buttonrating.length; i++) {
    buttonrating[i].addEventListener('click', () => {
        rate.textContent = buttonrating[i].textContent;
    })
}

const submitbtn = document.getElementsByClassName('btn--submit')[0];
const container = document.querySelectorAll('.container');

submitbtn.addEventListener('click', () => {
    container.forEach((item) => {
        item.classList.toggle('toggler');
    })
})