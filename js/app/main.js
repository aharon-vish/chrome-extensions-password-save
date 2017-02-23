define(['jquery', 'underscore', 'apiFirbaseStorage', 'text!templates/item.html']
    , function ($, _, storage, template) {
        var flagPasswordRender,editFlag;

        $('.new-password-form input').on('keydown', function (e) {
            if (e.keyCode === 32) {
                return false;
            }
        });

        $('#backToList').click(function (e) {
            //css Animation
            $('.newPasswordForm').slideUp('slow');
            $('.passwordList').css('display', 'block');

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
                            $('button[data-elemnt-index=' + item.service + ']').on("click", removeEl.bind(this));
                            $('button[data-elemnt-index=' + item.service + ']').on("click", editEl.bind(this));
                        }
                    }
                });
            }
        });

        $('#addNew').click(function () {
            //css Animation
            $('.passwordList').css('display', '');
            $('.newPasswordForm').slideDown("slow");
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
                $(".new-password-form").trigger('reset');
                $('#passwordList').append(_.template(template, objectItem));
                storage._add(objectItem);
            }
        }).bind(this);

        function removeEl(e) {
            var key = e.currentTarget.attributes.getNamedItem('data-elemnt-index').value;
            e.currentTarget.parentElement.remove();
            storage._remove(key);
        }

        function editEl(e) {
            //css Animation
            $('.passwordList').css('display', '');
            $('.newPasswordForm').slideDown("slow");

            var key = e.currentTarget.attributes.getNamedItem('data-elemnt-index').value;

            var service = $('li[data-elemnt-index='+key+']').find("#serviceL span").text();
            var username = $('li[data-elemnt-index='+key+']').find("#userNameL span").text();
            var password = $('li[data-elemnt-index='+key+']').find("#passwordL span").text();

            $(".new-password-form").find('#service').val(service);
            $(".new-password-form").find('#userName').val(username);
            $(".new-password-form").find('#password').val(password);
            $(".new-password-form").find('#savePass').text("edit");
            editFlag = true;


            //css Animation
            $('.newPasswordForm').slideUp('slow');
            $('.passwordList').css('display', 'block');

            //todo change value of save btn to edit btn and change back

        }
    }
);
