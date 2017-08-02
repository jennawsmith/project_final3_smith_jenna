
//This is backstretch, jqeury number 1
$(document).ready(function () {
    $.backstretch('img/brick.jpg');
});

//This calls my responsive tabs on menu page, jquery number 2
$('#responsiveTabsDemo').responsiveTabs({
    startCollapsed: 'accordion'
});

//This is my jQuery function that will increase the size of a specials image when clicking on it
$('.specialsimg').click(function () {
    $(this).css('width', '40%');
});

//This is my javascript function that will add content
//THIS WON'T SHOW UP AFTER MY RESPONSIVE TABS ABOVE, but will show up if is placed above it... why?!

document.getElementById('review').innerHTML = '<h3>Please leave us a review!</h3>';
