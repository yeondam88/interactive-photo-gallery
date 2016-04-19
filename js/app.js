$(document).ready(function() {


    //Fiter Images by data-keywords
    $('#search').keyup(function() {

        var current_query = $(this).val();

        if (current_query != "") {
            $(".gallery li a").hide();

            $(".gallery li a").each(function() {

                var current_keyword = $(this).attr('data-keywords');

                if (current_keyword.indexOf(current_query) >= 0) {
                    $(this).show();
                }

            });
        } else {
            $(".gallery li a").show();
        }
    });

    //Initialize lightbox plug-in
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'showImageNumberLabel': true,
        'alwaysShowNavOnTouchDevices': true
    });


});
