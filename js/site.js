'use strict';

(function () {
    var pillTabContentContainers = document.querySelectorAll('.pill__tabs__nav__item__content');
    var pillTabLinks = document.querySelectorAll('.pill__tabs__nav__item__link');

    // Hide all links and tabs except the ones with an index value of 0
    pillTabContentContainers.forEach(function (pillTabContent) {
        if (pillTabContent.id !== 'tab__content-0') {
            pillTabContent.style.display = 'none';
            pillTabContent.classList = 'pill__tabs__nav__item__content';
        }
    });

    // Hide all links and tabs except the ones that are marked as active
    function updateTabStates(pillTabContentContainers) {
        pillTabContentContainers.forEach(function (pillTabContent) {
            pillTabContent.style.display = 'none';
            pillTabContent.classList = 'pill__tabs__nav__item__content';
        });

        pillTabLinks.forEach(function (link) {
            link.classList = 'pill__tabs__nav__item__link';
        });
    }

    var links = document.querySelectorAll('.pill__tabs__nav__item__link');
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            var tabNumber = this.hash.substr(1).slice(-1);
            var tabContent = document.getElementById('tab__content-' + tabNumber);

            if (this.click) {
                updateTabStates(pillTabContentContainers);

                tabContent.style.display = 'block';
                tabContent.classList = 'pill__tabs__nav__item__content pill__tabs__nav__item__content--active';
                this.classList = 'pill__tabs__nav__item__link pill__tabs__nav__item__link--active';
            }
        });
    });
})();