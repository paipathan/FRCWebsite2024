document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function(){
        document.querySelector('.logo-fade-in-div').classList.add('title-fade-in');
        console.log('faded in')
        setTimeout(function(){
            console.log('sliding left...')
            document.querySelector('.logo-fade-in-div').classList.add('shift-logo-left');
            setTimeout(function(){
                document.querySelector('.team-number').classList.remove('hidden');
                document.querySelector('.team-name').classList.remove('hidden');
                console.log('show text')
            }, 1000)
        }, 1000)
    }, 1000)

});

$(function(){
    $(".dropdown").hover(
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");
            });
    })

