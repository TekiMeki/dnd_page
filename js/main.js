let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.menu');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('hide');
    }
    else if (scrollPosition() < lastScroll && containHide()) {
        //scroll up
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})

//selectors
const themeCheckbox = document.querySelector(".checkbox");

//state
const theme = localStorage.getItem('theme');

//on mount
theme && document.body.classList.add(theme);

//handlers
handleThemeCheckBox = () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    }
    else {
        localStorage.removeItem('theme');
    }
};

//events
themeCheckbox.addEventListener('click', handleThemeCheckBox);


