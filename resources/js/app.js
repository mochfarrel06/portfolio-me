import { createApp } from 'vue';

import './bootstrap';
import Aos from 'aos';
import App from './App.vue';
import router from './router';

import '../css/app.css'
import 'aos/dist/aos.css'

Aos.init()

createApp(App).use(router).mount('#app')
