<template>
  <div class="pt-3 pb-2 mb-3 border-bottom">
    <router-link to="/roles/create" class="btn btn-sm btn-outline-secondary">Add</router-link>
  </div>

  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="role in roles" :key="role.id">
          <td>{{role.id}}</td>
          <td>{{role.name}}</td>
          <td>
          <div class="btn-group mr-2">
            <router-link :to="`/roles/${role.id}/edit`" class="btn btn-sm btn-outline-secondary">
            Edit</router-link>
            <a href="javascript:void(0)" class="btn btn-sm btn-outline-secondary" @click="onDelete(role.id)">Delete</a>
          </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import {ref,onMounted} from "vue";
import {Role} from "@/models/role"
import axios from "axios";
export default {
  name:"Roles",
  setup(){
    const roles = ref([]);
    onMounted(async()=>{
      const {data} = await axios.get("roles");
      roles.value = data;
    });
    const onDelete =async(id:number)=>{
      if(confirm("are you sure?")){
        await axios.delete(`roles/${id}`);
              roles.value = roles.value.filter((role:Role)=>{
                return role.id !== id;
              })
      }
    
    }
    return{
      roles,onDelete
    }
  }
}
</script>
<style scoped>
  
</style>