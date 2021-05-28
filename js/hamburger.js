function displayMenu() {
    const elem = document.getElementById('hamburgerMenu');
    elem.setAttribute('class', 'displayOn');
}

function hideMenu() {
    const elem = document.getElementById('hamburgerMenu');
    elem.setAttribute('class', 'displayOff');
}

function signOut() {
    auth.signOut();
    alert("You are now logged out.");
}

function signedIn() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            // Do something for the user here. 
            console.log(user.uid);
            $("#menuItemContainer").append('<a href="./map.html" class="menuItem" onclick="signOut()">Sign Out</a>');
        } else {
            console.log("Not signed in.")
            $("#menuItemContainer").append('<a href="./login.html" class="menuItem">Sign In</a>');
        }
    });
}