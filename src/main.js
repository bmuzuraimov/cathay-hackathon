import './assets/main.css'
import 'jquery';
import '@popperjs/core';
import 'bootstrap';
import 'jquery-ui-dist/jquery-ui';
import '@fancyapps/fancybox';
import 'isotope-layout';
import 'bootstrap-touchspin'; // Confirm the correct import path in the documentation
import 'owl.carousel';
import 'wowjs';

// Importing CSS
// import './assets/css/bootstrap.css';
import './assets/css/style.css';
import './assets/css/responsive.css';

// Custom script
// Note: Only import custom-script.js if it does not conflict with Vue's reactivity.
// Often, custom scripts need to be adapted when moving from a jQuery-based project to Vue.
import './assets/js/custom-script.js'; 

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
