<template>
  <div class="about">
    <h2 style="flex-basis: 100%" v-if="!hasSucceeded">Enter your email to begin</h2>
    <h2 style="flex-basis: 100%" v-if="hasSucceeded">&nbsp;</h2>
    <form
      @submit.prevent="onSubmit"
      action="#"
      style="width: 100%"
      v-if="!isSubmitting && !hasSucceeded"
    >
      <input
        style="flex-grow: 2"
        name="email"
        type="email"
        value="kris@swnsn.com"
        placeholder="Enter your email to get started"
      />
      <input type="submit" value="Sign Up" />
    </form>
    <div class="loading" v-if="isSubmitting">
      <Spinner />
    </div>
    <transition name="fade">
      <div class="checkEmail" v-if="hasSucceeded">Please check your email</div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { API } from "../../lib/FieldReporterProAPI";
import { ref } from "vue";
import Spinner from "../../components/Spinner.vue";
import { useRouter } from "vue-router";

const isSubmitting = ref(false);
const hasSucceeded = ref(false);
const router = useRouter();

async function onSubmit(e: any) {
  const email = e.target.email.value;
  isSubmitting.value = true;
  const result = API.post("/api/sign-up", { email: email });
  setTimeout(() => {
    result
      .then(() => {
        isSubmitting.value = false;
        hasSucceeded.value = true;
      })
      .catch(() => {
        isSubmitting.value = false;
      });
  }, 800);
}
</script>

<style>
@media (min-width: 1024px) {
  form,
  .about,
  .loading {
    /*min-height: 100vh;*/
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
