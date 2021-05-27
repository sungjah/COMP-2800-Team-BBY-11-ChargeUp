function submit() {
    document.getElementById("submit").addEventListener('click', function () {
            var address = document.getElementById("address").value;
            console.log(address);
            var additional = document.getElementById("additional").value;
            console.log(additional);
            var postalcode = document.getElementById("postalcode").value;
            console.log(postalcode);
            var city = document.getElementById("city").value;
            console.log(city);
            var province = document.getElementById("province").value;
            console.log(province);
            var country = document.getElementById("country").value;
            console.log(country);

            if (address == "") {
                alert('Please enter a valid address')
            } else if (postalcode == "") {
                alert('Please enter a valid postal code')
            } else if (city == "") {
                alert('Please enter a city')
            } else if (province == "Default") {
                alert('Please select a province')
            } else {
                var verifyRef = db.collection("verify");
                verifyRef.add({ //The us of curly brackets creates an object. We must use ":" to assign values to properties in an object.
                    address: address,
                    unit: additional,
                    postalcode: postalcode,
                    city: city,
                    province: province,
                    country: country
                });
                window.location.href='map.html';
            }
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
                $("#username").html("there");
            }
        });
    }
    //greetings();