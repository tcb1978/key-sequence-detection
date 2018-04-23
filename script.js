const pressed = [];
const keyCode = 'unicorn';

window.addEventListener('keyup', (e) => {
    // push each keystroke into pressed array
    pressed.push(e.key);
    // determine number of charecters to splice from back to front in array
    const keyCodeEnd = -keyCode.length - 1;
    const keCodeFront = pressed.length - keyCode.length;
    pressed.splice(keyCodeEnd, keCodeFront);
    // does array contain the characters in keyCode
    if (pressed.join('').includes(keyCode)) {
        cornify_add();
    }
});

// add button with cornify_add()
const unicorn = document.querySelector('button');
function gimmieUnicorn() {
    cornify_add();
};
unicorn.addEventListener('click', gimmieUnicorn);



