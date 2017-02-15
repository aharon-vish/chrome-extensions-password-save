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

    var apiFirbaseStorage =
    {
        list: [],
        dirtyFlag: false,
        _remove: function (item) {
            $.each(this.list, function (index, value) {
                if (this.list[index]["service"] === item) {
                    this.list.splice(index, 1);
                    return false;
                }
            }.bind(this));

        },
        _add: function (item) {
            if (!this.list.length > 0 && !this.dirtyFlag) {
                this.list.push(this.facebook);
                this.list.push(this.gmail);
                this.dirtyFlag = true;
            }
            this.list.push(item);
        },

        _getAllRecored: function () {
            if (!this.list.length > 0 && !this.dirtyFlag) {
                this.list.push(this.facebook);
                this.list.push(this.gmail);
                this.dirtyFlag = true;
            }
            return this.list;
        },
        gmail: {
            service: "gmail",
            userName: "aharon",
            password: "123456rt"
        },
        facebook: {
            service: "facebook",
            userName: "aharon",
            password: "qazwsx"
        }
    };
    return apiFirbaseStorage;
});