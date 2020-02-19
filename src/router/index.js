import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../components/Register')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/Login')
    },
    {
        path: '/todo',
        name: 'Todo',
        component: () => import('../components/Todo')
    },
    {
        path: '/todo-create',
        name: 'TodoCreate',
        component: () => import('../components/CreateTodo')
    },
    {
        path: '/todo/:id',
        name: 'TodoView',
        component: () => import('../components/ViewTodo')
    },
    {
        path: '/todo/:id/edit',
        name: 'TodoEdit',
        component: () => import('../components/EditTodo')
    },
    {
        path: '*',
        redirect: '/'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
