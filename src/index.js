import './reset.css';
import './style.css';

import {loadNavBar} from "./navbar.js"
import {loadHome, deleteHome} from "./home.js"

(function main () {
    loadNavBar();
    loadHome();
})();