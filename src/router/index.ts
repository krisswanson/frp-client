import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignInView from "../views/SignInView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: SignInView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      name: "sign-up",
      path: "/sign-up",
      component: () => import("../views/signup/IndexView.vue"),
      children: [
        {
          path: "",
          name: "signup start",
          component: () => import("../views/signup/EmailView.vue"),
        },
        {
          path: "verify-email/:code",
          component: () => import("../views/signup/VerifyEmail.vue"),
        },
        {
          name: "about you",
          path: "about-you",
          component: () => import("../views/signup/AboutYouView.vue"),
        },
        {
          name: "set password for new account",
          path: "set-password",
          component: () => import("../views/signup/PasswordView.vue"),
        },
      ],
    },
  ],
});

export default router;
