
//This is backstretch, jqeury number 1
$(document).ready(function () {
    $.backstretch('img/brick.jpg');
});

//This is my javascript function that will add content

document.getElementById('review').innerHTML = '<h3>Please leave us a review!</h3>';


//This is my jQuery function that adds hover effect

//This calls my responsive tabs on menu page, jquery number 2
$('#responsiveTabsDemo').responsiveTabs({
    startCollapsed: 'accordion'
});
