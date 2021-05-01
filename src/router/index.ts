import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from "@/pages/Dashboard.vue"
import Users from "@/pages/users/Users.vue"
import UsersCreate from "@/pages/users/UsersCreate.vue"
import UsersEdit from "@/pages/users/UsersEdit.vue"
import Roles from "@/pages/roles/Roles.vue"
import RolesCreate from "@/pages/roles/RolesCreate.vue"
import RolesEdit from "@/pages/roles/RolesEdit.vue"
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
    { path:"/users/create",component:UsersCreate},
    { path:"/users/:id/edit",component:UsersEdit},
    { path:"/roles",component:Roles},
    { path:"/roles/create",component:RolesCreate},
    { path:"/roles/:id/edit",component:RolesEdit},
    {path:"",component:Dashboard}
  ]
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
