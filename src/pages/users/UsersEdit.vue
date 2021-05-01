<template>
    <form @submit.prevent="submit">
      <div class="mb-3">
        <label>First Name</label>
        <input v-model="data.first_name" class="form-control" name="first_name">
      </div>
      <div class="mb-3">
        <label>Last Name</label>
        <input v-model="data.last_name" class="form-control" name="last_name">
      </div>
      <div class="mb-3">
        <label>Email</label>
        <input v-model="data.email" class="form-control" name="email">
      </div>
      <div class="mb-3">
        <label>Role</label>
        <select v-model="data.role_id" class="form-control" name="role_id">
          <option v-for="role in roles" :key="role.id" :value="role.id">{{role.name}}</option>
        </select>
      </div>
      <button class="btn btn-outline-secondary">Save</button>
    </form>
</template>
<script lang="ts">
import {reactive,ref,onMounted} from "vue";
import {useRouter,useRoute} from "vue-router";
import axios from "axios";
export default {
  name:"UsersCreate",
  setup(){
    const roles = ref([]);
    const data = reactive({
      first_name: "",
      last_name: "",
      email: "",
      role_id: "",
    })
    const router = useRouter();
    const route = useRoute();
    onMounted(async()=>{
      const{data:rolesData} = await axios.get("roles");
      roles.value = rolesData;
      const {data:userData} = await axios.get(`users/${route.params.id}`);
      data.first_name = userData.first_name;
      data.last_name = userData.last_name;
      data.email = userData.email;
      data.role_id = userData.role.id;
    });
    const submit = async () =>{
      const res = await axios.put(`users/${route.params.id}`,data);
      router.push("/users");
    }
    return {data,submit,roles};
  }
}
</script>
<style scoped>
  
</style>