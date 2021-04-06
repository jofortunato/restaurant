import './reset.css';
import './style.css';

import {loadNavBar} from "./navbar.js"
import {loadHome} from "./home.js"

(function main () {
    loadNavBar();
    loadHome();
    addNavEvents();

    
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

function changePage(targetPage) {
    let currentPage = document.getElementById('pageContainer');

    if (currentPage !== null) {
        currentPage.remove();
    }
    
    if (targetPage === 'home') {
        loadHome();
    }
    else if (targetPage === 'about') {
        alert('About');
    }
    else if (targetPage === 'contacts') {
        alert('Contacts');
    }
    else if (targetPage === 'gallery') {
        alert('Gallery');
    }
    else if (targetPage === 'menu') {
        alert('Menu');
    }
}