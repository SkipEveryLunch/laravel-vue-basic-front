<template>
  <form @submit.prevent="submit">
    <div class="mb-3 mt-3 row">
      <label class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input v-model="formData.name" class="form-control" name="name">
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Permissions</label>
      <div class="col-sm-10">
        <div class="form-check form-check-inline col-3" v-for="permission in permissionList" :key="permission.id">
          <input class="form-check-input" type="checkbox" :value="permission.id"
          @change="select(permission.id, $event.target.checked)">
          <label class="form-check-label">{{ permission.name }}</label>
        </div>
      </div>
    </div>

    <button class="btn btn-outline-secondary">Save</button>
  </form>
</template>
<script lang="ts">
import {reactive,ref,onMounted} from "vue";
import {useRouter,useRoute} from "vue-router";
import {Permission} from "@/models/permission";
import axios from "axios";
export default {
  name:"RolesCreate",
  setup(){
    const formData = reactive({
      name: "",
      permissions:[] as number[]
    })
    const router = useRouter();
    const route = useRoute();
    const permissionList = ref("");
    onMounted(async()=>{
      const {data:{data:permissionsData}} = await axios.get("permissions");
      permissionList.value = permissionsData;
      const {data:roleData} = await axios.get(`roles/${route.params.id}`);
      formData.name = roleData.name;
      formData.permissions = roleData.permissions.map((p:Permission)=>p.id);
    });
    const select = (id: number, checked: boolean) => {
      if (checked) {
        formData.permissions = [...formData.permissions, id];
        return;
      }
      formData.permissions = formData.permissions.filter(p => p !== id);
    }
    const submit = async () =>{
      const response = await axios.put(`/roles/${route.params.id}`,formData);
      router.push(`/roles`);
    }
    return {formData,select,submit,permissionList};
  }
}
</script>
<style scoped>
  
</style>