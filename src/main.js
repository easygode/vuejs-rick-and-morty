import { createApp } from 'vue';
import './assets/scss/main.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

//bootstrap
// import * as bootstrap from 'bootstrap'
import "@fontsource/montserrat"; // Defaults to weight 400.
import App from './App.vue'

createApp(App).mount('#app')