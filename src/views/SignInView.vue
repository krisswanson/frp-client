<script setup lang="ts">
import {ref} from "vue";

const email = ref('');
const pass = ref('');

function click(){
  console.log(email.value);
}

</script>

<template>
  <div>
    <h1>Sign In</h1>
    <input type="text" style="width: 100%" placeholder="email" v-model="email"/>
    <input type="password" style="width: 100%" placeholder="password" v-model="pass"/>
    <input type="button" name="Sign In" value="Sign In" @click="click">
  </div>

</template>


<style scoped>

</style>