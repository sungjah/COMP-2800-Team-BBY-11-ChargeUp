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

$('#submitButton').click(function () {
    $('.nameInput').hide();
});


function getName() {
    //replace < with unicode equivalent to invalidate HTML
    var myName = document.getElementById("userInput").value.replaceAll("<", "&lt;");

    //show and log that someone entered in chat
    firebase.database().ref("messages").push().set({
        "sender": "<span style='color:blue'>" + myName + "</span>",
        "message": "<span style='color:red'>" + "has entered the chat!" + "</span>"
    });
}
$("form").submit((e) => {
    e.preventDefault();
});

function sendMessage() {
    // get message/name and replace < with unicode < to invalidate any HTML contained within
    var myName = document.getElementById("userInput").value.replaceAll("<", "&lt;");
    var message = document.getElementById("message").value.replaceAll("<", "&lt;");

    //refuse to send a message if the name is empty
    if (myName == "") {
        return false;
    }

    //replace markdown markers with relevant HTML
    message = replacePatternItemsInString(message, "***", "***", "<i><b>", "</b></i>");
    message = replacePatternItemsInString(message, "**", "**", "<b>", "</b>");
    message = replacePatternItemsInString(message, "*", "*", "<i>", "</i>");

    // save in database
    firebase.database().ref("messages").push().set({
        "sender": "<span style='color:blue'>" + myName + "</span>",
        "message": message
    });
    //Resets Message text input after submit
    $('#myMessage')[0].reset();
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

//initialize current time containers
var m, d = 0;

function setDate() {
    //set current time for messages to show when placed in chat
    d = new Date()
    if (m != d.getMinutes()) {
        m = d.getMinutes();
    }
}

// attach listener for delete message
firebase.database().ref("messages").on("child_removed", function (snapshot) {
    //replace message with placeholder when it's deleted from Firebase
    document.getElementById("message-" + snapshot.key).innerHTML = "<span class='removed'>This message has been removed</span>";
});

// listen for incoming messages
firebase.database().ref("messages").on("child_added", function (snapshot) {
    //initialize message HTML variable
    var html = "";
    var myName = document.getElementById("userInput").value;
    // give each message a unique ID
    html += "<li id='message-" + snapshot.key + "'>";
    if (snapshot.val().sender == "<span style='color:blue'>" + myName + "</span>") {
        //if the message is from the user with this client's name:
        //get current time
        setDate();
        //create message body
        html += "<div id='message1' >" + snapshot.val().sender + ": " + "<span class='chatMessage'>" + snapshot.val().message + "</span>" + " " + "<button style ='font-size:0.7em' data-id='" + snapshot.key + "' onclick='deleteMessage(this);'>";
        html += "Delete";
        //add delete buttom
        html += "</button>" + " " + "<span style = 'font-size:0.7em'>" + d.getHours() + ":" + m + "</span>";
        html += "</li>" + "</div>";
    } else {
        //same as above but for other users' messages, so no delete
        setDate();
        html += "<div id='message2' style ='text-align:left'>" + snapshot.val().sender + ": " + snapshot.val().message;
        html += " " + "<span style = 'font-size:0.7em'>" + d.getHours() + ":" + m + "</span>" + "</li>" + "</div>";
    }
    //add fresh message to the display
    document.getElementById("messages").innerHTML += html;
    //scroll to this message
    $('#messages')[0].scrollTop = $('#messages')[0].scrollHeight
});