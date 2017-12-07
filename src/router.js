import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './Components/login.vue'
import signUp from './Components/signUp.vue'
import admin from './Components/AdminPanel/admin.vue'


Vue.use(VueRouter)

const router =new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/login", component: Login
        },
        {
            path: "/signUp", component: signUp
        },
        {
            path: "/admin", component: admin
        }
    ]
})


export default router