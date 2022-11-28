<template>
  <div class="container">
    <h1>Sign Up</h1>
    <Spinner v-show="signUpStore.isLoadingView" />
    <RouterView v-slot="{ Component }" class="rv"  v-show="!signUpStore.isLoadingView">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import Spinner from "../../components/Spinner.vue";
import { useSignupStore } from "../../stores/signup.js";

const signUpStore = useSignupStore();
</script>
