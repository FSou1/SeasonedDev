window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.btn-show');

    button.addEventListener('click', () => {
        const after = document.querySelector('.after');

        after.classList
            .toggle('hidden');
        after.classList
            .add('fade-in-animation');

        const header = document.querySelector('.headline h1');

        header.classList
            .toggle('hidden');
        header.classList
            .toggle('fade-in-animation');
    });
});