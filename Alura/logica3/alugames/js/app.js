const btns = document.querySelectorAll('.dashboard__item__button');
const img = document.querySelectorAll('.dashboard__item__img');

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        changeStatus(btn, img[index]);
    });
});

function changeStatus(btn, img) {
    if(btn.classList.contains('dashboard__item__button--return')) {
        btn.classList.remove('dashboard__item__button--return');
        btn.innerHTML = `Alugar`;
        img.classList.remove('dashboard__item__img--rented');
    } else {
        btn.classList.add('dashboard__item__button--return');
        btn.innerHTML = `Devolver`;
        img.classList.add('dashboard__item__img--rented');
    };
};