$(document).ready(function () {
    // Buttons
    $('.btn').click(function () {
        console.log('button clicked');
    });

    // Forms
    $('.form-control')
    // form-control focus
        .focus(function () {
            $(this).parent('.form-group').addClass('is-focused');
        })
        // form-control blur
        .blur(function () {
            $(this).parent('.form-group').removeClass('is-focused');
            const value = $(this).val();
            if (value && value !== '' && value.length !== 0) {
                $(this).parent('.form-group').addClass('is-filled');
            } else {
                $(this).parent('.form-group').removeClass('is-filled');
            }
        })
        // form-control filled
        .keyup(function () {
            // const value = $(this).val();
            // if (value) {
            //     $(this).parent('.form-group').addClass('is-filled');
            // } else {
            //     $(this).parent('.form-group').removeClass('is-filled');
            // }
        });
});