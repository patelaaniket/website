$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar1').addClass("sticky");
        }
        else {
            $('.navbar1').removeClass("sticky");
        }
    })
});

