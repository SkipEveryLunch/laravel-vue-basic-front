import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from "@/pages/Dashboard.vue"
import Users from "@/pages/Users.vue"
import Register from "@/pages/Register.vue"
import Login from "@/pages/Login.vue"
import Wrapper from "@/components/Wrapper.vue"
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.withCredentials = true;

const routes: Array<RouteRecordRaw> = [
{
  path:"/register",
  component:Register
},
{
  path:"/login",
  component:Login
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
