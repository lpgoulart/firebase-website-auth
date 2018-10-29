window.onload = function() {
    (function () {

        // Initialize Firebase
        var config = {
            apiKey: "<your api key>",
            authDomain: "<your project id>.firebaseapp.com",
            databaseURL: "https://<your project id>.firebaseio.com",
            storageBucket: "<your project id>.appspot.com",
            storageBucket: "your-app.appspot.com",
            messagingSenderId: "your--app-id"
        };
        firebase.initializeApp(config);
        // Copy and paste this section from your app config on 
        // https://console.firebase.google.com/
        
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log(firebaseUser);
            } else {
                console.log('Not conected');
            }
        });

        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log(firebaseUser);

                // Display on page console the user informations if logged in
                var currentUser = firebase.auth().currentUser;
                if (currentUser != null) {
                    var currentUser = firebase.auth().currentUser;
                    currentUser.providerData.forEach(function (profile) {
                    console.log("Sign-in provider: " + profile.providerId);
                    console.log("  Provider-specific UID: " + profile.uid);
                    console.log("  Name: " + profile.displayName);
                    console.log("  Email: " + profile.email);
                    console.log("  Photo URL: " + profile.photoURL);
                });
            }
            } else {
                // Display on page console
                console.log('Not conected');
            }
        });

    }());
}


// Login function when pressed and successfully filled, reload page with user loggeds
function login(e) {
    
    // Get the input values of email and password
    var email = document.getElementById("txtEmail").value;
    var password = document.getElementById("txtPassword").value;
    
    var auth = firebase.auth();

    // Verify if the input values aren't null
    if ( email != "" && password != "" ) {
        // Create a new user from Email and Password provider
        var promise = auth.signInWithEmailAndPassword(email,password);
        promise.catch(e => window.alert(e.message));
        window.location.replace("your-page.html");
    } else {
        window.alert ( "Enter valid inputs!" );
    }
}
