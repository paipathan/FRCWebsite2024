    document.addEventListener("DOMContentLoaded", function () {

        setTimeout(function(){
            document.querySelector('.center-title').classList.add('fade-in-logo');
            console.log('faded in')
            setTimeout(function(){
                document.querySelector('.center-title').classList.add('shift-left');
                console.log('sliding left...')
                setTimeout(function(){
                    document.querySelector('.team-number').classList.add('fade-in-text');
                    setTimeout(function() {
                    document.querySelector('.team-name').classList.add('fade-in-text');
                    document.querySelector('.team-quote').classList.add('fade-in-text');
                    console.log('show number, name, quote')

                    }, 500)
                }, 1000)
            }, 1000)
        }, 500)

    });

document.querySelectorAll('.bottom-image').addEventListener("DOMContentLoaded", function() {
    console.log('images loaded')
})


$('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });