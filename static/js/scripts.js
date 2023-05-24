/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//Dark mode 
const toggleSwitch = document.querySelector('#toggle-switch');

toggleSwitch.addEventListener('change', function() {
  const body = document.querySelector('body');
  body.classList.toggle('dark', toggleSwitch.checked);
});