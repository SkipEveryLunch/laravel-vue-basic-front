<template>
  <main class="form-signin">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please Register</h1>
      <input class="form-control" v-model="firstName" placeholder="First Name" required>
      <input class="form-control" v-model="lastName" placeholder="Last Name" required>
      <input type="email" class="form-control" v-model="email" placeholder="E-mail" required>
      <input type="password" class="form-control" v-model="password" placeholder="Password" required>
      <input type="password" class="form-control" v-model="passwordConfirm" placeholder="Password Confirm" required>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
  </main>
</template>
<script lang="ts">
import {ref} from "vue";
import axios from "axios";
export default {
  name:"Register",
  setup(){
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const password = ref("");
    const passwordConfirm = ref("");
    const submit =():void=>{
      axios.post("http://localhost:8000/api/register",
      { first_name: firstName.value,
        last_name: lastName.value,
        email: email.value,
        password: password.value,
        password_confirm: passwordConfirm.value,
        }).then(res=>console.log(res));
    };
    return {
      firstName,lastName,email,password,passwordConfirm,submit
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