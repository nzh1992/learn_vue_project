import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/less/index.less"
import router from './router';
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createPinia } from 'pinia';

const pinia = createPinia()
const app = createApp(App);
app.use(ElementPlus);
app.use(pinia);
app.use(router);
app.mount('#app');

// 全局注册element plus icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}