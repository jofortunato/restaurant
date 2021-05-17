import './reset.css';
import './style.css';

import {loadNavBar} from './navbar.js'
import {loadHome} from './home.js'
import {loadAbout} from './about.js'
import {loadGallery} from './gallery.js'
import {loadMenu} from './menu.js'

(function main () {
    loadNavBar();
    addNavEvents();
    loadHome();
    addHomeEvents();

    
})();

function addNavEvents () {
    const homeTab = document.getElementById('homeTab');
    const aboutTab = document.getElementById('aboutTab');
    const contactsTab = document.getElementById('contactsTab');
    const menuTab = document.getElementById('menuTab');
    const galleryTab = document.getElementById('galleryTab');

    homeTab.addEventListener('click', function(){changePage('home')});
    aboutTab.addEventListener('click', function(){changePage('about')});
    contactsTab.addEventListener('click', function(){changePage('contacts')});
    menuTab.addEventListener('click', function(){changePage('menu')});
    galleryTab.addEventListener('click', function(){changePage('gallery')});
}

function addHomeEvents () {
    const bookNowBtn = document.getElementById('book-now');
    const viewMenuBtn = document.getElementById('view-menu');

    bookNowBtn.addEventListener('click', function(){changePage('contacts')});
    viewMenuBtn.addEventListener('click', function(){changePage('menu')});
}

function changePage(targetPage) {
    let currentPage = document.getElementById('pageContainer');

    if (currentPage !== null) {
        currentPage.remove();
    }
    
    if (targetPage === 'home') {
        loadHome();
        addHomeEvents();
    }
    else if (targetPage === 'about') {
        loadAbout();
    }
    else if (targetPage === 'contacts') {
        alert('Contacts');
    }
    else if (targetPage === 'gallery') {
        loadGallery();
    }
    else if (targetPage === 'menu') {
        loadMenu();
    }
}