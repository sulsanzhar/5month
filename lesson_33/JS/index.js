document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const input = document.querySelector('input');
    const btn = document.querySelector('button');
    const container = document.getElementById('container');


    function showHTMLElements() {
        const country = document.createElement('div');
        country.innerText = 'Страна:';
        const p = document.createElement('p');
        p.innerText = input.value;
        country.append(p);

        const border = document.createElement('ul');
        border.innerText = 'Граничит с:';

        container.append(country, border);
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        showHTMLElements();

    })
})