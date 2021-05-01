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
import {onMounted,ref} from "vue";
import {useRouter} from "vue-router";

export default{
  name:"Nav",
  setup(){
    const name = ref("");
    const router = useRouter();
    onMounted(async()=>{
      const {data:{first_name,last_name}} = await axios.get("user");
      name.value = `${first_name} ${last_name}`;
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