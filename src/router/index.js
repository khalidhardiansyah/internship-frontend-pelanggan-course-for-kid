import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import NotFound from '../views/NotFound.vue'
import AuthLayout from '../components/Layout/AuthLayout.vue'

import DashboardView from '../views/user/DashboardView.vue'
import MyClassView from '../views/user/MyClassView.vue'
import ListClassView from '../views/user/ListClassView.vue'
import TransactionView from '../views/user/TransactionView.vue'


const routes= [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('../views/AboutView.vue')
    component: AboutView
  },
  {
    path:'/login',
    name:'login',
    component:LoginView,
  },
  {
    path:'/register',
    name:'register',
    component:RegisterView
  },
  {
    path:'/mydashboard',
    name:'authlayout',
    component: AuthLayout,
    children:[
      {
        path:'/dashboard',
        name:'dashboard',
        component: DashboardView
      },
      {
        path:'/myclass',
        name:'myclass',
        component: MyClassView
      },
      {
        path:'/transaction',
        name:'transaction',
        component: TransactionView
      },
      {
        path:'/list-class',
        name:'listclass',
        component: ListClassView
      },
    ]
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "active"
})

export default router
