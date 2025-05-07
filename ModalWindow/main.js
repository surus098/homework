const button = document.querySelector('.button-open')
const modal = document.querySelector('.modal')

button.addEventListener('click', () => {
    modal.classList.add('modal--open')
})

modal.addEventListener('click', event => {
    const target = event.target;

    if (
        (target && target.classList.contains('modal')) ||
        target.classList.contains('modal__close-button')
    ) {
        modal.classList.remove('modal--open');
    }
});

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
        modal.classList.toggle('modal--open')
    }
})

