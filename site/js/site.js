'use strict';

(function () {
    var allTabContentContainers = document.querySelectorAll('.tab-content');
    var pillTabLinks = document.querySelectorAll('.tab');

    // Hide all links and tabs except the ones with an index value of 0
    allTabContentContainers.forEach(function (tabContent) {
        if (tabContent.id !== 'tab-0') {
            tabContent.style.display = 'none';
            tabContent.classList = 'tab-content';
        }
    });

    var links = document.querySelectorAll('.tabs .tab a');
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            var tabNumber = this.hash.substr(1).slice(-1);
            var currentTabContent = document.getElementById('tab-' + tabNumber);

            if (e.target.click) {
                allTabContentContainers.forEach(function (tabContent) {
                    tabContent.style.display = 'none';
                    tabContent.classList = 'tab-content';
                });

                pillTabLinks.forEach(function (link) {
                    link.classList = '';
                });
                currentTabContent.style.display = 'block';
                currentTabContent.classList = 'tab-content is-active';
                e.target.parentElement.classList = 'tab is-active';
            }
        });
    });

    // Bulma Handburger Menu Code (Straight Copy from their Docs!)
    document.addEventListener('DOMContentLoaded', () => {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach(el => {
                el.addEventListener('click', () => {

                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            });
        }
    });
})();


