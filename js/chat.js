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
// var myName = document.getElementById("userInput").value;

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
$("form").submit((e) => {
    e.preventDefault();
});

function sendMessage() {
    var myName = document.getElementById("userInput").value;
    // get message
    var message = document.getElementById("message").value;

    // save in database
    firebase.database().ref("messages").push().set({
        "sender": "<span style='color:blue'>" + myName + "</span>",
        "message": message
    });


    // prevent form from submitting
    return false;
}

function deleteMessage(self) {
    var myName = document.getElementById("userInput").value;
    // get message ID
    var messageId = self.getAttribute("data-id");

    // delete message
    firebase.database().ref("messages").child(messageId).remove();
}

var m, d = 0;

function setDate() {
    d = new Date()
    if (m != d.getMinutes()) {
        m = d.getMinutes();
    }
}


// attach listener for delete message
firebase.database().ref("messages").on("child_removed", function (snapshot) {
    // remove message node
    document.getElementById("message-" + snapshot.key).innerHTML = "This message has been removed";
});

// listen for incoming messages
firebase.database().ref("messages").on("child_added", function (snapshot) {
    var html = "";
    var myName = document.getElementById("userInput").value;
    // give each message a unique ID
    html += "<li id='message-" + snapshot.key + "'>";
    if (snapshot.val().sender == "<span style='color:blue'>" + myName + "</span>") {
        setDate();
        html += snapshot.val().sender + ": " + snapshot.val().message + " " + "<button data-id='" + snapshot.key + "' onclick='deleteMessage(this);'>";
        html += "Delete";
        html += "</button>" + " " + "<span style = 'font-size:0.7em'>" + d.getHours() + ":" + m + "</span>";
        html += "</li>";
    } else {
        setDate();
        html += snapshot.val().sender + ": " + snapshot.val().message;
        html += "<span style = 'font-size:0.7em'>" + d.getHours() + ":" + m + "</span>";
    }

    document.getElementById("messages").innerHTML += html;

});