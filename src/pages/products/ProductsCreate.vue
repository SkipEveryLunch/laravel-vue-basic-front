<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label>Title</label>
      <input v-model="formData.title" class="form-control" name="title">
    </div>
    <div class="mb-3">
      <label>Description</label>
      <textarea v-model="formData.description" class="form-control" name="description"></textarea>
    </div>
    <div class="mb-3">
      <label>Image</label>
      <div class="input-group">
        <input v-model="formData.image" class="form-control" name="image">
        <ImageUpload @uploaded="formData.image = $event"/>
      </div>
    </div>
    <div class="mb-3">
      <label>Price</label>
      <input v-model="formData.price" type="number" class="form-control" name="price">
    </div>
    <button class="btn btn-outline-secondary">Save</button>
  </form>
</template>
<script lang="ts">
import axios from "axios";
import {reactive} from "vue";
import {useRouter} from "vue-router";
import ImageUpload from "@/components/ImageUpload";
export default {
  name:"ProductCreate",
  components:{ImageUpload},
  setup(){
    const router = useRouter();
    const formData = reactive({
      title: '',
      description: '',
      image: 'rrrrrrrr',
      price: ''
    })
    const onSubmit =async()=>{
      await axios.post("products",formData);
      router.push("/products");
    }
    return{
      formData,onSubmit
    };
  }
}
</script>
<style lang="">
  
</style>