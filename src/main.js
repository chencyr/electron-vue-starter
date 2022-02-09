import { createApp } from 'vue'

import { createRouter, createWebHashHistory } from 'vue-router'

import index from './index.vue'
import Page1 from './renderers/components/page1.vue'
import Page2 from './renderers/components/page2.vue'
import Page3 from './renderers/components/page3.vue'

const routes = [
    { path: '/', component: Page1 },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
    { path: '/page3', component: Page3 },
];

const router = createRouter({
    history: createWebHashHistory(),
    mode: process.env.IS_ELECTRON ? 'hash' : 'history',
    routes,
});

const app = createApp(index);
app.use(router);
app.mount('#app');
