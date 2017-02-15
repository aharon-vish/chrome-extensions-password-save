define(['jquery', 'underscore', 'apiFirbaseStorage', 'text!templates/item.html']
    , function ($, _, storage, template) {
        var passwordAndUserList;

        $('.new-password-form input').on('keydown', function (e) {
            if (e.keyCode === 32) {
                return false;
            }
        });
        $('#backToList').click(function (e) {
            $('.newPasswordForm').slideUp("slow");
            $('.passwordList').css('display', 'block');

            // if (passwordAndUserList === undefined) {
            passwordAndUserList = storage._getAllRecored();
            //}
            $('[data-elemnt-index]').remove();
            $.each(passwordAndUserList, function (index, item) {
                $('#passwordList').append(_.template(template, {item}));
                $('button[data-elemnt-index=' + item.service + ']').on("click", removeEl.bind(this));
            });
        }).bind(this);

        $('#addNew').click(function () {
            $('.passwordList').css('display', '');
            $('.newPasswordForm').slideDown("slow");
        });

        $('#savePass').click(function (e) {
            var formInputArray = $('.new-password-form input');
            // var itemAddToList = mapToObject(formInputArray, objectItem, []);
            var objectItem = {};
            objectItem.service = $('#service').val();
            objectItem.userName = $('#userName').val();
            objectItem.password = $('#password').val();

            if (objectItem.service === "" ||
                objectItem.userName === "" ||
                objectItem.password === "") {
                alert("not valid input");
                $(".new-password-form").trigger('reset');
                return;
            }
            $(".new-password-form").trigger('reset');

            storage._add(objectItem);
        }).bind(this);

        function removeEl(e) {
            var $delBtn = $(e.currentTarget);
            var elIndex = $delBtn.attr('data-elemnt-index');
            $('li[data-elemnt-index=' + elIndex + ']').remove();
            $.each(passwordAndUserList, function (index, ele) {
                if (ele.service === elIndex) {
                    passwordAndUserList.splice(index, 1);
                    return false;
                }
            });

            storage._remove(elIndex);
        }

    }
);
