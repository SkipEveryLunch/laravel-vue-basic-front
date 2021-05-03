<template>
  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>

    <nav class="my-2 my-md-0 mr-md-3">
      <span class="p-2 text-white text-decoration-none pointer" @click="logout">Sign out</span>
      <router-link to="/profile" class="p-2 text-white text-decoration-none">{{name}}</router-link>
    </nav>
  </nav>
</template>

<script lang="ts">
import axios from "axios";
import {computed,ref,watch} from "vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex";

export default{
  name:"Nav",
  setup(){
    const name = ref("");
    const router = useRouter();
    const store = useStore();
    const user = computed(()=>{
      return store.state.User.user;
      });
    watch(user,()=>{
      name.value = `${user.value.first_name} ${user.value.last_name}`;
    });
    const logout = async() =>{
      const {data} = await axios.delete("logout");
      if(data.message&&data.message==="success"){
        await router.push("login");
      }
    };
    return {name,logout};
  }
}
</script>

<style scoped>
.pointer{
  cursor : pointer;
}
</style>