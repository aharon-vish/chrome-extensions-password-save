define(['jquery', 'underscore', 'text!templates/item.html'], function ($, _, template) {
    var item = {
        service: 'serviceA',
        userName: 'userNameB',
        passwordL: 'passwordLC',
        index: $('#passwordList').children().length
    };

    $('#passwordList').append(_.template(template, {item}));

    $('#backToList').click(function (e) {
        $('.newPasswordForm').slideUp( "slow");
        $('.passwordList').css('display', '');
    });

    $('#addNew').click(function () {
        $('.passwordList').css('display', 'none');
        $('.newPasswordForm').slideDown( "slow");
    });
    $('#deleteBtn').click(function (e) {
        var $delBtn = $(e.currentTarget);
        var elIndex = $delBtn.attr('data-elemnt-index');
        $('li[data-elemnt-index='+elIndex+']').remove();
    });
});
