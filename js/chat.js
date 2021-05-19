// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDT0wNqbuoiZEmUbJc4MFA_5l4kedZbTjU",
    authDomain: "chargeup-4b09d.firebaseapp.com",
    projectId: "chargeup-4b09d",
    storageBucket: "chargeup-4b09d.appspot.com",
    messagingSenderId: "141565730249",
    appId: "1:141565730249:web:71710642aeb96d9ba11c18",
    measurementId: "G-9QGMK8QKGR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// function sender() {
//     var myName = document.getElementById("userInput").value;
// }
$('#submitButton').click(function () {
    $('.nameInput').hide();
});
// var myName = prompt("Enter your name");

function getName() {
    var myName = document.getElementById("userInput").value;
    firebase.database().ref("messages").push().set({
        "sender": "<span style='color:blue'>" + myName + "</span>",
        "message": "<span style='color:red'>" + "has entered the chat!" + "</span>"
    });
    // // get message
    // var message = document.getElementById("message").value;

    // // save in database
    // firebase.database().ref("messages").push().set({
    //     "sender": myName,
    //     "message": message
    // });
}

// const name = () => document.getElementByID("userInput").value;
$("form").submit((e) => {
    e.preventDefault();
});

function sendMessage() {
    var myName = document.getElementById("userInput").value;
    // get message
    var message = document.getElementById("message").value;

    // save in database
    firebase.database().ref("messages").push().set({
        "sender": myName,
        "message": message
    });


    // prevent form from submitting
    return false;
}

// listen for incoming messages
firebase.database().ref("messages").on("child_added", function (snapshot) {
    var html = "";
    // give each message a unique ID
    html += "<li id='message-" + snapshot.key + "'>";
    html += snapshot.val().sender + ": " + snapshot.val().message;
    html += "</li>";

    document.getElementById("messages").innerHTML += html;
});