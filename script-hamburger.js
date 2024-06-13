
document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('menu-icon');
    var menu = document.getElementById('menu');
    var menuClose = document.getElementById('menu-close');
    var menuItems = document.querySelectorAll('.menu-item');

    menuIcon.addEventListener('click', function() {
        menu.style.opacity = '1';
        menu.style.visibility = 'visible';
    });

    menuClose.addEventListener('click', function() {
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
    });

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            menu.style.opacity = '0';
            menu.style.visibility = 'hidden';
        });
    });
});
