<template>
  <div class="about">
    <h1 style="flex-basis: 100%">About you:</h1>
    <form @submit.prevent="onSubmit" style="width: 100%">
      <input
        style="flex-grow: 1"
        name="firstName"
        placeholder="First Name"
        v-model="signupStore.firstName"
      />
      <input
        style="flex-grow: 1"
        name="lastName"
        placeholder="Last Name"
        v-model="signupStore.lastName"
      />
      <input type="submit" value="Next" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useSignupStore } from "../../stores/signup";

const router = useRouter();
const signupStore = useSignupStore();

signupStore.isLoadingView = false;

if (!signupStore.code) {
  router.replace({ name: "sign-up" });
}

function onSubmit(e: any) {
  if (signupStore.firstName.length > 0 && signupStore.lastName.length > 0) {
    router.replace("/sign-up/set-password");
  }
}
</script>

<style>
@media (min-width: 1024px) {
  form,
  .about {
    /*min-height: 100vh;*/
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
}
</style>
