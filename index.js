let languageSelect;
let textarea;
let boldCheck;
let italicCheck;
let keyboardLayout;

function updateLayout(to) {
    keyboardLayout.src = `./res/layouts/${to}.svg`;
}

function load() {
    languageSelect = document.querySelector("#language");
    textarea = document.querySelector("#textarea");
    boldCheck = document.querySelector("#bold");
    italicCheck = document.querySelector("#italic");
    keyboardLayout = document.querySelector("#keyboard-layout");

    updateLayout(languageSelect.value);
    languageSelect.addEventListener('change', e => {
        updateLayout(e.target.value);
    });

    boldCheck.addEventListener('click', e => {
        if (e.target.checked) {
            textarea.style.fontWeight = "bold";
        } else {
            textarea.style.fontWeight = "normal";
        }
    });

    italicCheck.addEventListener('click', e => {
        if (e.target.checked) {
            textarea.style.fontStyle = "italic";
        } else {
            textarea.style.fontStyle = "";
        }
    });
}

function keyup() {
    if (languageSelect.value === 'Zemin') {
        textarea.value = zasok(textarea.value);
    } else if (languageSelect.value === 'Rusimez') {
        textarea.value = rusimez(textarea.value);
    } else if (languageSelect.value === 'Erang') {
        textarea.value = erang(textarea.value);
    } else if (languageSelect.value === 'Uarnamala') {
        textarea.value = uarnamala(textarea.value);
    } else if (languageSelect.value === 'Tugjan') {
        textarea.value = tugjan(textarea.value);
    }
}

function context_move(x, y) {
    context_menu = document.getElementById('context');
    context_menu.style.left = x + 'px';
    context_menu.style.top = y + 'px';
}

function context_toggle_visibility(e) {
    context_menu = document.getElementById('context');
    if (e.button === 2) {
        context_menu.style.transition = "0.0s";
        context_move(e.pageX, e.pageY);
        context_menu.classList.remove("hidden");
    } else if (e.button === 0 && e.target.offsetParent != context) {
        context_menu.style.transition = "0.25s";
        context_menu.classList.add("hidden");
    }
}

window.addEventListener('load', load);
window.addEventListener('keyup', keyup);
window.addEventListener('mouseup', context_toggle_visibility);
window.addEventListener('contextmenu', (e) => { e.preventDefault() });