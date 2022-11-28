import { defineStore } from "pinia";
import { ref } from "vue";

export const useSignupStore = defineStore("signup", () => {
  const code = ref("");
  const email = ref("");
  const firstName = ref("");
  const lastName = ref("");
  const password = ref("");
  const passwordVerify = ref("");
  //TODO Make a note in miro about this approach and then remove
  const validatingEmail = ref("");
  const isLoadingView = ref(false);
  return {
    code,
    email,
    firstName,
    lastName,
    password,
    passwordVerify,
    validatingEmail,
    isLoadingView,
  };
});
