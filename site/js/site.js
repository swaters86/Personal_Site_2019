'use strict';

(function () {
    var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    if (viewportWidth >= 375) {
        window.onscroll = function () { makeSticky() };

        var tabList = document.querySelector('.tablist');
        var tabListContent = document.querySelector('.tablist__tab__content--active');
        var sticky = tabList.offsetTop;


        function makeSticky() {
            if (window.pageYOffset > sticky) {
                tabList.classList.add('tablist--sticky');
                tabListContent.classList.add('tablist__content--sticky');
            } else {
                tabList.classList.remove('tablist--sticky');
                tabListContent.classList.remove('tablist__content--sticky');
                tabListContent.querySelector('.skills__headline__level__2').classList.remove('skills__headline__level__2--sticky');
            }
        }

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
                    
                    if (window.scrollY > sticky) {
                        window.scroll(0, 605);
                    }
                }
            });
        });
    }
})();