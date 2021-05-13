function submit() {
    document.getElementById("submit").addEventListener('click', function () {
        let address = document.getElementById("address").value;
        console.log(address);
        let unit = document.getElementById("unit").value;
        console.log(unit);
        let postalcode = document.getElementById("postalcode").value;
        console.log(postalcode);

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                // Do something for the user here. 
                console.log(user.uid);
                db.collection("users").doc(user.uid)
                    .get()
                    .then(function (doc) {
                        var usersRef = db.collection("users").doc(user.uid);
                        usersRef.set({
                            address: address,
                            unit: unit,
                            postalcode: postalcode
                        }, {
                            merge: true
                        })
                    })
            } else {
                // No user is signed in.
            }
        });
    })
}
//submit();