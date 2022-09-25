import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import About from "../views/About.vue";
import Charts from "../views/Charts.vue";
import Login from "../views/Login.vue";
import DashboardLayout from "../layout/DashboardLayout.vue";
import AuthLayout from "../layout/AuthLayout.vue";

Vue.use(VueRouter);

let authpages = {
    path: "/",
    redirect:"/login",
    component: AuthLayout,
    name: "Authentication",
    children: [
        {
            path: "/login",
            name: "Login",
            component: Login,
        },
    ],
};

let dashboardPages = {
    path: "/",
    component: DashboardLayout,
    redirect: "/",
    name: "Dashboard layout",
    children: [
        {
            path: "/",
            name: "Home page",
            component: HomePage,
        },
        {
            path: "/about",
            name: "About",
            component: About,
        },
        {
            path: "/charts",
            name: "Chart page",
            component: Charts,
        },
    ],
};

const routes = [dashboardPages, authpages];

const router = new VueRouter({
    routes,
});

export default router;
