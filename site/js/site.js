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
})();
