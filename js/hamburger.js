function displayMenu() {
    const elem = document.getElementById('hamburgerMenu');
    elem.setAttribute('class', 'displayOn');
}

function hideMenu() {
    const elem = document.getElementById('hamburgerMenu');
    elem.setAttribute('class', 'displayOff');
}