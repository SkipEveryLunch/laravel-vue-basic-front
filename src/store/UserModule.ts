import {User} from "@/models/user";
import { Commit } from 'vuex'

interface state{
  user:User
}

export default{
  namespaced:true,
  state: {
    user: new User()
  },
  mutations: {
    SET_USER:(state:state,user:User)=>{
      state.user = user;
    }
  },
  actions: {
    setUser:({commit}:{commit:Commit},user:User)=>{
      commit("SET_USER",user);
    }
  }
}