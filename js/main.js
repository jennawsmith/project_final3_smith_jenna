
//This is backstretch, jqeury number 1
$(document).ready(function () {
    $.backstretch('img/brick.jpg');
});


//This is my jQuery function that will blur a specials image when clicking on it
$('#specials').on('click', function () {
    $('.specialsimg').fadeIn(200);
});

//This calls my responsive tabs on menu page, jquery number 2
$('#responsiveTabsDemo').responsiveTabs({
    startCollapsed: 'accordion'
});

//This is my javascript function that will add content
//THIS WON'T SHOW UP AFTER MY RESPONSIVE TABS ABOVE

document.getElementById('review').innerHTML = '<h3>Please leave us a review!</h3>';
