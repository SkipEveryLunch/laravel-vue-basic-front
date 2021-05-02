<template>
  <label class="btn btn-primary">
    Upload <input type="file" hidden @change="upload($event.target.files)">
  </label>
</template>
<script lang="ts">
import axios from "axios";
import {SetupContext} from "vue";
export default {
  name:"ImageUpload",
  emits:["uploaded"],
  setup(_:any,context:SetupContext){
    const upload =async (files:FileList|null)=>{
      if(files===null)return;
      const formData = new FormData();
      formData.append('image', files[0]);
      const {data:{url}} = await axios.post("upload",formData);
      context.emit("uploaded",url);
    }
    return{
      upload
    };
  }
}
</script>
<style lang="">
  
</style>