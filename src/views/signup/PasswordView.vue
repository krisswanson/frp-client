<template>
  <div class="about">
    <h1 style="flex-basis: 100%">Set your password:</h1>
    <form @submit.prevent="onSubmit" style="width: 100%">
      <input
        style="flex-grow: 1"
        name="password"
        placeholder="Password"
        v-model="signupStore.password"
        type="password"
      />
      <input
        style="flex-grow: 1"
        name="verifyPassword"
        placeholder="Verify Password"
        v-model="signupStore.passwordVerify"
        type="password"
      />
      <input type="submit" value="Next" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { API } from "../../lib/FieldReporterProAPI";
import { useRouter } from "vue-router";
import { useSignupStore } from "../../stores/signup";

const router = useRouter();
const signupStore = useSignupStore();

if (!signupStore.code) {
  router.replace({ name: "sign-up" });
}

async function onSubmit(e: any) {
  try {
    console.log("sign-up");
    signupStore.isLoadingView = true;
    const result = await API.post("/api/sign-up/complete", {
      firstName: signupStore.firstName,
      lastName: signupStore.lastName,
      password: signupStore.password,
      passwordVerify: signupStore.passwordVerify,
      email: signupStore.email,
      code: signupStore.code,
    });
    console.log(result);
    //TODO Move to next route
    // signupStore.isLoadingView = false;
  } catch (e) {
    //TODO DIRECT TO ERROR ON FAILURE
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
