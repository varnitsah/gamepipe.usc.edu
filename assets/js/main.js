$(window).resize(function (){
    if($(window).width() <= 768) {
        $("#usc_logo").attr("src","../assets/images/shieldmono-white.png");

    }
    else{
        $("#usc_logo").attr("src","../assets/images/usc-shield-name-white.png");
    }
});

$('.navigation_links').on("click", function (event) {
    var link_name = $(this).attr('name');
    window.location.href = "../pages/" + link_name +".html";
});


if ( $('body').height() < $( window ).height() - 70) {
    $('body').height( $(window).height() - 170);
}

$(window).resize(function(){
    if ( $('body').height() < $( window ).height() - 70) {
        $('body').height( $(window).height() - 170);
    }
});
