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
import {reactive,onMounted} from "vue";
import {useRouter,useRoute} from "vue-router";
import ImageUpload from "@/components/ImageUpload.vue";
export default {
  name:"ProductsEdit",
  components:{ImageUpload},
  setup(){
    const router = useRouter();
    const route = useRoute();
    const formData = reactive({
      title: '',
      description: '',
      image: '',
      price: ''
    })
    const onSubmit =async()=>{
      await axios.put(`products/${route.params.id}`,formData);
      router.push("/products");
    }
    const load =async()=>{
      const {data} = await axios.get(`products/${route.params.id}`);
      formData.title = data.title;
      formData.description = data.description;
      formData.image = data.image;
      formData.price = data.price;
    };
    onMounted(() => {
      load();
    })
    return{
      formData,onSubmit
    };
  }
}
</script>
<style lang="">
  
</style>