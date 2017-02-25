define(['jquery'], function ($) {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDyVQv8JFcDz2wyrsQt9xgip2xCCDKSy78",
        authDomain: "chrome-extensions-793ac.firebaseapp.com",
        databaseURL: "https://chrome-extensions-793ac.firebaseio.com",
        storageBucket: "chrome-extensions-793ac.appspot.com",
        messagingSenderId: "44666153436"
    };
    firebase.initializeApp(config);
    var ref = firebase.database().ref('/passwords');

    var apiFirbaseStorage =
    {
        _remove: function (key) {
            ref.child(key).remove(function(err){
                if(err){
                    console.log(err);
                }else{
                    console.log('ok !!!');
                }
            });
        },
        _add: function (item) {
            ref.child("/" + item.service).set({
                password:item.password,
                username:item.username
            });
        },
        _getAllRecored: function (callBack) {
            ref.once('value', function (snapshot) {
                callBack(snapshot.val());
            }, function (error) {
                console.log("Error: " + error.code);
            });
        },
        _edit: function (key,username,password) {
            firebase.database().ref('passwords/' + key).set({
                username: username,
                password: password
            });
        }
    };

    // (function googleSignin() {
    //     var provider = new firebase.auth.GoogleAuthProvider();
    //     firebase.auth().signInWithPopup(provider).then(function(result) {
    //         var token = result.credential.accessToken;
    //         var user = result.user;
    //         console.log(token);
    //         console.log(user);
    //     }).catch(function(error) {
    //         console.log(error.code);
    //         console.log(error.message);
    //
    //     });
    // })();

    return apiFirbaseStorage;
});