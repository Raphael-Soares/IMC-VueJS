import Vue from "vue";
import VueRouter from "vue-router";
import {auth} from "../plugins/firebase";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("../layouts/Default.vue"),
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: "/calculator",
                name: "calculator",
                component: () => import("../views/Calculator.vue"),
            },
            {
                path: "/history",
                name: "history",
                component: () => import("../views/History.vue"),
            },
            {
                path: "/profile",
                name: "profile",
                component: () => import("../views/Profile.vue"),
            },
        ],
    },
    {
        path: "/",
        component: () => import("../layouts/Blank.vue"),
        children: [
            {
                path: "/login",
                name: "login",
                component: () => import("../views/Login.vue"),
            },
            {
                path: "/signin",
                name: "signin",
                component: () => import("../views/Signin.vue"),
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

    if (requiresAuth && !auth.currentUser) {
        next("/login");
    } else {
        next();
    }
});

export default router;
