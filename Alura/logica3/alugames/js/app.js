const btns = document.querySelectorAll('.dashboard__item__button');
const img = document.querySelectorAll('.dashboard__item__img');

btns.forEach((e) => {
    e.addEventListener('click', changeStatus, changeImg);
});

function changeStatus() {
    if(this.classList.contains('dashboard__item__button--return')) {
        this.classList.remove('dashboard__item__button--return');
        this.innerHTML = `Alugar`;
    } else {
        this.classList.add('dashboard__item__button--return');
        this.innerHTML = `Devolver`;
    };

};