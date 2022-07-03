const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// dark or light images
function imageMode(color) {
    image1.src = `img/undraw_modern_design_re_dlp8_${color}.svg`;
    image2.src = `img/undraw_static_website_re_x70h_${color}.svg`;
    image3.src = `img/undraw_portfolio_website_re_jsdd_${color}.svg`;
}

function toggleDarkLightMode(isLight) {
    nav.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 /50%)';
    textBox.style.backgroundColor = isLight ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';
    isLight? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    isLight ? imageMode('light') : imageMode('dark');
}

// switch theme dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(false);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(true);
    }
}

// event listener
toggleSwitch.addEventListener('change', switchTheme);

// check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(false);
    }
}