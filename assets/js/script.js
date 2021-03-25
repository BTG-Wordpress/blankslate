var nav = 1;
function navigation() {
	if(nav % 2 === 0) {
        $(".line").removeClass('animate');
        $(".line").toggleClass('reverse');
    } 
    else {
        $(".line").removeClass('reverse');
        $('.line').toggleClass('animate');
    }
    nav = nav + 1;
}

$(".cover").click(function() {
    navigation()
});


