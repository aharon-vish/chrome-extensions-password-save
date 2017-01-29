define(['jquery', 'underscore', 'text!templates/item.html'], function ($, _, template) {
    this.item = {
        service: '',
        userName: '',
        password: '',
        index: ''
    };
    this.passwordListArray = [];

    $(document).ready(function () {
//todo fetch data and display
    });

    $('#backToList').click(function (e) {
        $('.newPasswordForm').slideUp("slow");
        $('.passwordList').css('display', 'block');

        $('#deleteBtn').on( "click",function (e) {
            var $delBtn = $(e.currentTarget);
            var elIndex = $delBtn.attr('data-elemnt-index');
            $('li[data-elemnt-index=' + elIndex + ']').remove();
            //todo delete from local storage
        });

    }).bind(this);

    $('#addNew').click(function () {
        $('.passwordList').css('display', '');
        $('.newPasswordForm').slideDown("slow");
    });

    $('#savePass').click(function (e) {
        var formInputArray = $('.new-password-form input');
        item = mapToObject(formInputArray, item, ['index']);
        item.index = $('#passwordList').children().length;

        $('#passwordList').append(_.template(template, {item}));
        $(".new-password-form").trigger('reset');

        passwordListArray.push(item);

        //todo add data to database

    });

    function mapToObject(itemArr, object, doNotMapThoseKeys) {
        Object.keys(object).map(function (key) {
            $.each(itemArr, function (index, value) {
                if (key === value.id) {
                    item[key] = value.value;
                    return false;
                } else if ($.inArray(key, doNotMapThoseKeys) > 0) {
                    return false;
                }
            });
        });
        return object;
    }

});
