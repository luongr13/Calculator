function setScreen(target) {

    if (target.id === 'clear') { 
        arr = [];
        return '0';
    }

    if (arr.length >= 12) { 
        return "error: number too large"; 
    }

    if (target.className === 'number' && arr.length === 0) {
        arr.push(target.innerText);
        return target.innerText;
    }

    if (target.className == 'number') {
        arr.push(target.innerText);
        return screen.innerText + target.innerText;

    }
}

arr = [];
left_op = 1;
right_op = 1;
operation = '';

container_div = document.querySelector('.container');
screen = document.querySelector("#screen");

container_div.addEventListener('click', e => {
    screen.innerText = setScreen(e.target); 
});

