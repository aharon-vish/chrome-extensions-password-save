define(['jquery'], function ($) {
    // Initialize Firebase
   // var firebase = '';
    var config = {
        apiKey: "AIzaSyDyVQv8JFcDz2wyrsQt9xgip2xCCDKSy78",
        authDomain: "chrome-extensions-793ac.firebaseapp.com",
        databaseURL: "https://chrome-extensions-793ac.firebaseio.com",
        storageBucket: "chrome-extensions-793ac.appspot.com",
        messagingSenderId: "44666153436"
    };
    firebase.initializeApp(config);

    //var rootRef = firebase.database().ref();
   // var provider = new firebase.auth.GoogleAuthProvider();
   // provider.addScope('https://www.googleapis.com/auth/plus.login');
   // firebase.auth().signInWithRedirect(provider);

    //firebase.auth().getRedirectResult().then(function(result) {
    //    if (result.credential) {
    //        // This gives you a Google Access Token. You can use it to access the Google API.
    //        var token = result.credential.accessToken;
    //        // ...
    //    }
    //    // The signed-in user info.
    //    var user = result.user;
    //}).catch(function(error) {
    //    // Handle Errors here.
    //    var errorCode = error.code;
    //    var errorMessage = error.message;
    //    // The email of the user's account used.
    //    var email = error.email;
    //    // The firebase.auth.AuthCredential type that was used.
    //    var credential = error.credential;
    //    // ...
    //});

    //firebase.auth().signInWithPopup(provider).then(function(result) {
    //    // This gives you a Google Access Token. You can use it to access the Google API.
    //    var token = result.credential.accessToken;
    //    // The signed-in user info.
    //    var user = result.user;
    //    // ...
    //}).catch(function(error) {
    //    // Handle Errors here.
    //    var errorCode = error.code;
    //    var errorMessage = error.message;
    //    // The email of the user's account used.
    //    var email = error.email;
    //    // The firebase.auth.AuthCredential type that was used.
    //    var credential = error.credential;
    //    // ...
    //});
    //firebase.auth().signInAnonymously().catch(function(error) {
    //
    //    console.log(error);
    //});

    //firebase.auth().signInWithEmailAndPassword("your mail", "your password").catch(function(error) {
    //    // Handle Errors here.
    //    var errorCode = error.code;
    //    var errorMessage = error.message;
    //    console.log(errorCode,errorMessage);
    //}).then(function(data){
    //    console.log(data);
    //});

    //firebase.auth().createUserWithEmailAndPassword("your mail, "your password").catch(function(error) {
    //    // Handle Errors here.
    //    var errorCode = error.code;
    //    var errorMessage = error.message;
    //    console.log(errorCode,errorMessage);
    //});
    //firebase.auth().onAuthStateChanged(function(user) {
    //    if (user) {
    //        // User is signed in.
    //        var isAnonymous = user.isAnonymous;
    //        var uid = user.uid;
    //        console.log( 'User is signed in',uid);
    //    } else {
    //        // User is signed o  ut.
    //        console.log('signed out');
    //    }
    //});
    //firebase.auth().signOut().then(function() {
    //    console.log( 'signOut');
    //}, function(error) {
    //    console.log( error);
    //});
    /*//////////////////////////////////////////////////////*/
 /*   firebase.database().ref().on("value", function (snapshot) {
        console.log(snapshot.val());
        console.log('key:', snapshot.key);
    }, function (error) {
        console.log("Error: " + error.code);
    });
    //////////////////////////////////////////////////////
    firebase.database().ref().child("users/ 1").on("value", function (snapshot) {
        console.log(snapshot.val());
    }, function (error) {
        console.log("Error: " + error.code);
    });
    //////////////////////////////////////////////////////
    firebase.database().ref().child("users/1").child("following").on("value", function (snapshot) {
        console.log(snapshot.val());
    }, function (error) {
        console.log("Error: " + error.code);
    });
    //////////////////////////////////////////////////////
    firebase.database().ref().child("users/").set( {
        John: {
            number: 11,
            age: 30
        }
    });
//////////////////////////////////////////////////////
    //create a unique key
    firebase.database().ref().child("users").push({
        name: "Amanda",
        number: 2,
        age: 20
    });
    ////////////////////////////////////////////////////
    //////  update
    var userUpdate = firebase.database().ref('/users/-KbjvQ06D0v7nT4FzjKn');
    userUpdate.update({
        "age": 330
    }, function(err){
        if(err){
            console.log(err);
        }else {
            console.log("update !!!");
        }
    });
    var userUpdate = firebase.database().ref('users');
    userUpdate.push({
        "name":"vivi"
    }).then(function(snap){
        console.log(snap.key);
    });
    userUpdate.remove(function(err){
        if(err){
            console.log(err);
        }else{
            console.log('ok !!!');
        }
    })*/
});