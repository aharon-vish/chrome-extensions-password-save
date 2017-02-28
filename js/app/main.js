define(['jquery', 'underscore', 'apiFirbaseStorage', 'text!templates/item.html']
    , function ($, _, storage, template) {
        var flagPasswordRender;

        $('.new-password-form input').on('keydown', function (e) {
            if (e.keyCode === 32) {
                return false;
            }
        });

        $('#backToList').click(function (e) {

            flipTheForm('listView');

            if (flagPasswordRender != true) {
                storage._getAllRecored(function (value) {
                    flagPasswordRender = true;
                    for (var key in value) {
                        if (value.hasOwnProperty(key)) {
                            var item = {};
                            item.service = key;
                            item.password = value[key].password;
                            item.username = value[key].username;
                            $('#passwordList').append(_.template(template, item));
                            attachClickEvent(item);
                        }
                    }
                    $('#loader-container').remove();
                });
            }
        });

        $('#addNew').click(function () {
            $(".new-password-form").trigger('reset');
            flipTheForm('saveView');
        });

        $('#savePass').click(function (e) {
            var objectItem = {};

            objectItem.service = $('#service').val();
            objectItem.username = $('#userName').val();
            objectItem.password = $('#password').val();

            if (objectItem.service === "" ||
                objectItem.userName === "" ||
                objectItem.password === "") {
                alert("not valid input");
                $(".new-password-form").trigger('reset');
                return false;
            } else {
                if (e.currentTarget.textContent == 'Save') {
                    $(".new-password-form").trigger('reset');
                    $('#passwordList').append(_.template(template, objectItem));
                    attachClickEvent(objectItem);
                    storage._add(objectItem);
                } else if (e.currentTarget.textContent == 'Edit') {
                    editEl(objectItem.service, objectItem.username, objectItem.password);
                    storage._edit(objectItem.service, objectItem.username, objectItem.password);
                }
            }

        }).bind(this);

        function removeEl(e) {
            var key = e.currentTarget.attributes.getNamedItem('data-elemnt-index').value;
            $('li[data-elemnt-index=' + key + ']').remove();
            storage._remove(key);
        }

        function editEl(e, username, password) {

            var key = e.currentTarget ? e.currentTarget.attributes.getNamedItem('data-elemnt-index').value : e;

            var serviceEl = $('li[data-elemnt-index=' + key + ']').find("#serviceL span");
            var usernameEl = $('li[data-elemnt-index=' + key + ']').find("#userNameL span");
            var passwordEl = $('li[data-elemnt-index=' + key + ']').find("#passwordL span");

            if (e.currentTarget && !username && !password) {
                flipTheForm('editView');

                $(".new-password-form").find('#service').val(serviceEl.text());
                $(".new-password-form").find('#userName').val(usernameEl.text());
                $(".new-password-form").find('#password').val(passwordEl.text());
            } else {
                flipTheForm('listView');
                serviceEl.text(key);
                usernameEl.text(username);
                passwordEl.text(password);
            }

        }

        function flipTheForm(whichView) {

            switch (whichView) {
                case "saveView":
                    //css Animation
                    $('.passwordList').css('display', '');
                    $('.newPasswordForm').slideDown("slow");
                    $(".new-password-form").find('#service').prop('disabled', false);
                    $(".new-password-form").find('#savePass').text("Save");
                    break;
                case "editView":
                    $('.passwordList').css('display', '');
                    $('.newPasswordForm').slideDown("slow");
                    $(".new-password-form").find('#service').prop('disabled', true);
                    $(".new-password-form").find('#savePass').text("Edit");
                    break;
                case "listView":
                    //css Animation
                    $('.newPasswordForm').slideUp('slow');
                    $('.passwordList').css('display', 'block');
                    break;
            }

        }
        
        function attachClickEvent(item) {
           $('button#deleteBtn[data-elemnt-index=' + item.service + ']').on("click", removeEl.bind(this));
           $('button#editBtn[data-elemnt-index=' + item.service + ']').on("click", editEl.bind(this));
        }
    }
);
