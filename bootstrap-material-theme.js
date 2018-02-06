$(document).ready(function () {
    $('.btn').click(function () {
        console.log('button clicked');
    });

    $('.form-control')
    // form-control focus
        .focus(function () {
            $(this).parent('.form-group').addClass('is-focused');
        })
        // form-control blur
        .blur(function () {
            $(this).parent('.form-group').removeClass('is-focused');
        })
        // form-control filled
        .keyup(function () {
            if ($(this).val()) {
                $(this).parent('.form-group').addClass('is-filled');
            } else {
                $(this).parent('.form-group').removeClass('is-filled');
            }
        });
});