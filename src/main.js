import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

import Page1 from './renderers/components/page1.vue'
import Page2 from './renderers/components/page2.vue'

const routes = [
    { path: '/', component: Page1 },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
];

const router = createRouter({
    history: createWebHashHistory(),
    mode: process.env.IS_ELECTRON ? 'hash' : 'history',
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
