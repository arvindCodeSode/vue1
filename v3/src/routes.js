import { createRouter,createWebHistory } from "vue-router";
import Home from './components/Home.vue'
import User from './components/User.vue'
import E404 from './components/E404.vue'

const routes = [
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'User',
        path:'/user/:name',
        component:User
    },
    {
        name:'E404',
        path:'/:pathMath(.*)*',
        component:E404
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router;