<template>
  <main class="form-signin">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please Login</h1>
      <input type="email" class="form-control" v-model="state.email" placeholder="E-mail" required>
      <input type="password" class="form-control" v-model="state.password" placeholder="Password" required>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
  </main>
</template>
<script lang="ts">
import {reactive} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

export default {
  name:"Login",
  setup(){
    const state = reactive({
      email:"",
      password:""
    });
    const router = useRouter();
    const submit =async ():Promise<void> =>{
      console.log(state);
      await axios.post("login",
      { email: state.email,
        password: state.password
        });
      await router.push("/");
    };
    return {
      state,submit
    }
  },
}
</script>
<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>