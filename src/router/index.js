import { createRouter, createWebHashHistory } from "vue-router";

// 设置路由规则
const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('@/views/Main.vue'),
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/Home.vue'),
            },
        ],
    },
];

// 创建路由对象
const router = createRouter({
    // 路由模式
    history: createWebHashHistory(),
    routes
});

export default router;