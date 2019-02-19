'use strict';

(function () {
    var pillTabContentContainers = document.querySelectorAll('.tablist__tab__content');
    var pillTabLinks = document.querySelectorAll('.tablist__tab__link');

    // Hide all links and tabs except the ones with an index value of 0
    pillTabContentContainers.forEach(function (pillTabContent) {
        if (pillTabContent.id !== 'tab-0') {
            pillTabContent.style.display = 'none';
            pillTabContent.classList = 'tablist__tab__content';
        }
    });

    // Hide all links and tabs except the ones that are marked as active
    function updateTabStates(pillTabContentContainers) {
        pillTabContentContainers.forEach(function (pillTabContent) {
            pillTabContent.style.display = 'none';
            pillTabContent.classList = 'tablist__tab__content';
        });

        pillTabLinks.forEach(function (link) {
            link.classList = 'tablist__tab__link';
        });
    }

    var links = document.querySelectorAll('.tablist__tab__link');
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            var tabNumber = this.hash.substr(1).slice(-1);
            var tabContent = document.getElementById('tab-' + tabNumber);

            if (this.click) {
                updateTabStates(pillTabContentContainers);

                tabContent.style.display = 'block';
                tabContent.classList = 'tablist__tab__content tablist__tab__content--active';
                this.classList = 'tablist__tab__link tablist__tab__link--active';
            }
        });
    });
})();