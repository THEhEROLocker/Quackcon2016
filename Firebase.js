/**
 * Created by Restart on 10/15/2016.
 */

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyDvsg_PsXEKRVtpfCB2RiSnz7bFY6yn4JM",
    authDomain: "quackcon-7bc9b.firebaseapp.com",
    databaseURL: "https://quackcon-7bc9b.firebaseio.com/",
    storageBucket: "quackcon-7bc9b.appspot.com"
};
firebase.initializeApp(config);
var database = firebase.database();

// Writes me into the data base
writeUserData("420", "Kiarash Torkian", "22", "torkian@pdx.edu", "http://cdn.skim.gs/images/diworwmlan1pzodexj1u/jerry-messing-now");
function writeUserData(id, name, age, email, imageUrl) {
    firebase.database().ref(id).set({
        fullName: name,
        age: age,
        email: email,
        profilePicture: imageUrl
    });
}

// Reads me back form the data base
var Ref = database.ref('420/age');
Ref.on('value', function (data) {
    console.log(data.val());
});

