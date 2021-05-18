// JavaScript source code

const note1 = new Audio('../audio/note1.ogg');
const note2 = new Audio('../audio/note2.ogg');
const note3 = new Audio('../audio/note3.ogg');
const note4 = new Audio('../audio/note4.ogg');

$(document).ready(function () {
    let state = 0;

    $("#flip-card-max").click(function () {
        if (state == 100) {
            note1.play();
        }
        else if (state == 6) {
            note1.play();
            
            setTimeout(function () { note4.play(); }, 1500);
            setTimeout(function () { note2.play(); }, 2000);
            setTimeout(function () { note3.play(); }, 2500);
            setTimeout(function () { let ntp = new Audio('../audio/note2.mp3'); ntp.play() }, 3000);
            setTimeout(function () { note1.play(); }, 3500);
            setTimeout(function () { let ntp = new Audio('../audio/note2.mp3'); ntp.play() }, 4000);
            setTimeout(function () { let ntp = new Audio('../audio/note1.mp3'); ntp.play() }, 4500);
            setTimeout(function () { state = 100; }, 4500);
        }
        else if (state == 4) {
            note1.play();
            state = 5;
        }
        else {
            state = 0;
        }

    });

    $("#flip-card-anton").click(function () {
        if (state == 100) {
            note2.play();
        }
        else if (state == 1) {
            note2.play();
            state = 2;
        }
        else if (state == 3) {
            note2.play();
            state = 4;
        }
        else if (state == 5) {
            note2.play();
            state = 6;
        }
        else {
            state = 0;
        }
    });

    $("#flip-card-jacob").click(function () {
        if (state == 100) {
            note3.play();
        }
        else if (state == 2) {
            note3.play();
            state = 3;
        }
        else {
            state = 0;
        }
    });

    $("#flip-card-jae").click(function () {
        if (state == 100) {
            note4.play();
        }
        else if (state == 0) {
            note4.play();
            state = 1;
        }
        else {
            state = 0;
        }
    });
});