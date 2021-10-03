/*jshint esversion: 6 */

(() => {
  const clickHandlers = [];

  const mainNavigationToggleButton = document.querySelector('.main-nav-toggle-button');
  const mainNavigationToggleButtonIcon = document.querySelector('.main-nav-toggle-button__icon');
  const mainNavigationLogoImage = document.querySelector('.main-nav__logo-image');

  if (!mainNavigationToggleButton || !mainNavigationToggleButtonIcon) {
      return;
  }

  mainNavigationToggleButton.classList.add('main-nav-toggle-button_visible');

  const handleMainNavigationToggleButtonClick = (evt) => {
      if (!clickHandlers.length) {
          return;
      }

      mainNavigationToggleButtonIcon.classList.toggle('main-nav-toggle-button__icon_close');
      mainNavigationLogoImage.classList.remove('.main-nav__logo-image');
      mainNavigationLogoImage.classList.add('.main-nav__logo-image_blue');

      clickHandlers.forEach((clickHandler) => clickHandler(evt));
  };

  mainNavigationToggleButton.addEventListener('click', handleMainNavigationToggleButtonClick);

  const addClickHandler = (clickHandler) => {
      clickHandlers.push(clickHandler);
  };

  window.mainNavigationToggleButton = {
      addClickHandler
  };
})();
