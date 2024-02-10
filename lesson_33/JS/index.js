document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const input = document.querySelector('input');
    const btn = document.querySelector('button');
    const container = document.getElementById('container');

    const request = config => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function () {
            if (this.status >= 200 && this.status < 300) {
                config.success(this.responseText);
            } else {
                config.error(this.status);
            }
        });
        xhr.addEventListener('error', function () {
            config.error('No internet');
        });
        xhr.addEventListener('timeout', function () {
            config.error('Timeout');
        });
        xhr.open(config.method, config.url);
        xhr.send();
    }

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