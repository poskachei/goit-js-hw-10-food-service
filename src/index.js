'use strict';

import toolbarSwich from './index.html';
import menuItemsTemplate from './templates/templateitems.hbs';
import dataMenuList from './menu.json';
import './styles.css';

const toolBar = document.querySelector('.toolbar');
toolBar.insertAdjacentHTML('beforebegin', toolbarSwich);
const toolbarDom = document.querySelector('#theme-switch-control');
const body = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const menuItems = document.querySelector('.js-menu');
let currentTheme = localStorage.getItem('Theme', body.className);

menuItems.insertAdjacentHTML('afterbegin', menuItemsTemplate(dataMenuList));

if (!currentTheme) {
  toolbarDom.checked = true;
  localStorage.setItem('Checked', toolbarDom.checked);
  body.classList.add('light-theme');
  currentTheme = localStorage.setItem('Theme', body.className);
} else {
  body.classList.add(currentTheme);
  toolbarDom.checked = JSON.parse(localStorage.getItem('Checked'));
}

const changeTheme = () => {
  body.classList.toggle(Theme.DARK);
  body.classList.toggle(Theme.LIGHT);
  currentTheme = localStorage.setItem('Theme', body.className);
  localStorage.setItem('Checked', toolbarDom.checked);
};

toolbarDom.addEventListener('change', changeTheme);
