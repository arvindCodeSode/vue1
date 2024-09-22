import { createRouter,createWebHistory } from "vue-router";
import Home from './components/Home.vue'
const router = [
    {
        name:'Home',
        path:'/',
        component:Home
    }
];
const routes = createRouter({
    history:createWebHistory(),
    router
})
export default routes;