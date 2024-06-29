function setScreen(target) {
    if (target.id === 'clear') { 
        screen_container = [];
        return '0';
    }

    if (screen_container.length >= 12) { 
        return "error: number too large"; 
    }

    if (target.className === 'number' && screen_container.length < 12) {
        return screen_container.length === 0 ? 
        target.innerText :
        screen.innerText + target.innerText;
    }
}

screen_container = [];

container_div = document.querySelector('.container');
screen = document.querySelector("#screen");

container_div.addEventListener('click', e => {
    text = setScreen(e.target);
    screen.innerText = text; 
    screen_container.push(text);
});

