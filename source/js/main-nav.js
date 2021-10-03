/*jshint esversion: 6 */

(() => {
  const mainNavigation = document.querySelector('.main-nav');

  if (!mainNavigation) {
      return;
  }

  const handleMainNavigationToggleButtonClick = () => {
      mainNavigation.classList.toggle('main-nav_opened');
  };

  window.mainNavigationToggleButton.addClickHandler(handleMainNavigationToggleButtonClick);
})();
