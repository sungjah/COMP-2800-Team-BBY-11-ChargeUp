function submit() {
    document.getElementById("submit").addEventListener('click', function () {
        let address = document.getElementById("address").value;
        console.log(address);
        let additional = document.getElementById("additional").value;
        console.log(additional);
        let postalcode = document.getElementById("postalcode").value;
        console.log(postalcode);
        let city = document.getElementById("city").value;
        console.log(city);
        let province = document.getElementById("province").value;
        console.log(province);
        let country = document.getElementById("country").value;
        console.log(country);

        var verifyRef = db.collection("verify");
        verifyRef.add({ //The us of curly brackets creates an object. We must use ":" to assign values to properties in an object.
            address: address,
            unit: additional,
            postalcode: postalcode,
            city: city,
            province: province,
            country: country
        });

    })
}
//submit();

function greetings() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            // Do something for the user here. 
            console.log(user.uid);
            db.collection("users").doc(user.uid)
                .get()
                .then(function (doc) {
                    var n = doc.data().name;
                    console.log(n);
                    $("#username").text(n);
                })
        } else {
            // No user is signed in.
        }
    });
}
//greetings();