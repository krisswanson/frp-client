<template>
  <div class="about">
    <h1 style="flex-basis: 100%">Verifying Email</h1>
<!--    <Spinner />-->
  </div>
</template>

<script setup lang="ts">
import { API } from "../../lib/FieldReporterProAPI";
import { useRoute, useRouter } from "vue-router";
import Spinner from "../../components/Spinner.vue";
import { ref } from "vue";
import { useSignupStore } from "../../stores/signup";

let loading = ref(true);
const router = useRouter();
const route = useRoute();
const signupStore = useSignupStore();

const validation = API.post("/api/sign-up/validate-email", {
  code: route.params.code,
});

signupStore.isLoadingView = true;

setTimeout(() => {
  validation
    .then((response: any) => {
      loading.value = false;
      signupStore.email = response!.data.email;
      signupStore.code = route.params.code as string;
      router.push({ path: "/sign-up/about-you", replace: true });
    })
    .catch((e) => {
      //TODO Route to error
    });
}, 800);
</script>

<style>
@media (min-width: 1024px) {
  form,
  .about {
    /*min-height: 100vh;*/
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }
}
</style>
