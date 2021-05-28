// JavaScript source code

//prepare audio files for playback
const note1 = new Audio('../audio/note1.mp3');
const note2 = new Audio('../audio/note2.mp3');
const note3 = new Audio('../audio/note3.mp3');
const note4 = new Audio('../audio/note4.mp3');

$(document).ready(function () {
    //pattern step index used to check which notes can be played
    let state = 0;

    $("#flip-card-max").click(function () {
        //if the state is 100, the cards play their note when clicked, with no restrictions
        if (state == 100) {
            note1.play();
        }
        //this is the last step, so the full tune plays after completion and the state is set to 100
        else if (state == 6) {
            note1.play();

            setTimeout(function () { note4.play(); }, 1500);
            setTimeout(function () { note2.play(); }, 2000);
            setTimeout(function () { note3.play(); }, 2500);
            //creating a new audio object allows playing the same note quickly at the cost of performance
            setTimeout(function () { let ntp = new Audio('../audio/note2.mp3'); ntp.play() }, 3000);
            setTimeout(function () { note1.play(); }, 3500);
            setTimeout(function () { let ntp = new Audio('../audio/note2.mp3'); ntp.play() }, 4000);
            setTimeout(function () { let ntp = new Audio('../audio/note1.mp3'); ntp.play() }, 4500);
            setTimeout(function () { state = 100; }, 4500);
        }
        //if the state is a valid but not final one, the note is played and the state is set to the next one
        else if (state == 4) {
            note1.play();
            state = 5;
        }
        //if the state isn't valid, the state counter rests to 0 and the process has to be restarted
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