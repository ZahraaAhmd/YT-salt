/**** 
 * slack slider  
 * events slider 
 */
$('.events-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$(document).ready(function() {
    /***
     *   AOS animation 
     */
    AOS.init({
        duration: 1000,
        disable: 'mobile', // values from 0 to 3000, with step 50ms
        once: true,
    });
});

$(document).ready(function() {

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 90) {
            $(".navbar").addClass("navbar-sticky");
        }
        if ($(window).scrollTop() > 350) {
            $(".navbar-sticky").addClass("sticky-active");
        } else if ($(window).scrollTop() < 90) {
            $(".navbar").removeClass("navbar-sticky sticky-active");
        }
    });
    $(".toggle-sidebar").click(function() {
        $(".sideBar").toggleClass("collapsed-sideBar");
        $(".main-content").toggleClass("toggled-sideBar");
    });
    $("#add-role").on('change', function() {
        if ($(this).is(":checked")) {
            $(".new-role").removeClass("d-none");
        } else {
            $(".new-role").addClass("d-none");
        }
    });
    $("#select-role").on('change', function() {
        if ($(this).val() === "mentor") {
            $(".selected").addClass('d-none');
            $(".mentor-selected").removeClass("d-none");
        } else if ($(this).val() === "protege") {
            $(".selected").addClass('d-none');
            $(".protege-selected").removeClass("d-none");
        } else {
            $(".selected").addClass('d-none');
        }
    });

    /**** messages page js  */
    $(".open-messages").click(function() {
        $(".msg-block").hide();
        $(".VM-messages .chats-block").toggleClass("d-block");
    });
    $(".VM-messages .chat-box .friends-messages").click(function() {
        $(".msg-block").show();
        $(".VM-messages .chats-block").toggleClass("d-block");
    });
});
/*** start upload image js****/


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('.upload-img').css('background-image', 'url(' + e.target.result + ')');
            $('.upload-img').hide();
            $('.upload-img').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$(".upload-img input").change(function() {
    readURL(this);
});
$(".file-attach input").change(function() {
    var name = $(this).val().split('\\').pop();
    name = name.split('.')[0];
    $('.file-attach span').html(name);
});