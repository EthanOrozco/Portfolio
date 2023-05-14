const toggleSwitch = document.querySelector('.toggle-switch');
const mainStylesheet = document.querySelector('#main-stylesheet');
const darkModeStylesheet = document.querySelector('#dark-mode-stylesheet');

function switchTheme(e) {
  if (e.target.checked) {
    mainStylesheet.disabled = true;
    darkModeStylesheet.disabled = false;
  } else {
    mainStylesheet.disabled = false;
    darkModeStylesheet.disabled = true;
  }
}

toggleSwitch.addEventListener('change', switchTheme);