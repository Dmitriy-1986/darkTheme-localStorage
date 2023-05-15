const btnDarkLight = document.querySelector('#btnDarkLight');
const html = document.querySelector('html');

btnDarkLight.addEventListener('click', addDarkTheme);

function addDarkTheme(e) {
    e.preventDefault();

    if(localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
        html.classList.remove('dark');
        btnDarkLight.textContent = 'Light';
    } else {
        localStorage.setItem('theme', 'dark');
        html.classList.add('dark');
        btnDarkLight.textContent = 'Dark';
    }

}

window.onload = function() {
    if(localStorage.getItem('theme') === 'dark'){
        html.classList.add('dark');
        btnDarkLight.textContent = 'Dark';
    }
}

