import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./components/Home.vue"),
        name: "home",
    },
    {
        path: "/posts",
        component: () => import("./components/post/Index.vue"),
        name: "post.index",
    },
    {
        path: "/posts/create",
        component: () => import("./components/post/Create.vue"),
        name: "post.create",
    },
    {
        path: "/posts/:id/edit",
        component: () => import("./components/post/Edit.vue"),
        name: "post.edit",
    },
    {
        path: "/posts/:id",
        component: () => import("./components/post/Show.vue"),
        name: "post.show",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
