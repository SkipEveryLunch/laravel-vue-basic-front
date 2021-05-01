<template>
  <div>
    <Nav/>
    <div class="container-fluid">
      <div class="row">
        <Menu/>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4"> 
          <router-view/>
        </main>
      </div>
    </div>   
  </div>  
</template>
<script>
import Nav from "@/components/Nav"
import Menu from "@/components/Menu"
import axios from "axios";
import {onMounted} from "vue";
import {useRouter} from "vue-router";

export default{
  name:"Wrapper",
  components:{
    Nav,
    Menu
  },
  setup(){
    const router = useRouter();
    onMounted(async()=>{
      try{
        const {data} = await axios.get("user");
      }catch(e){
        await router.push("/login");
      }

    })
  }
}
</script>
<style lang="">
  
</style>