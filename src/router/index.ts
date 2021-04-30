import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from "@/pages/Dashboard.vue"
import Users from "@/pages/Users.vue"
import Register from "@/pages/Register.vue"
import Wrapper from "@/components/Wrapper.vue"

const routes: Array<RouteRecordRaw> = [
{
  path:"/register",
  component:Register
},
{
  path:"",
  component:Wrapper,
  children:[
    { path:"/users",component:Users},
    {path:"",component:Dashboard}
  ]
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
