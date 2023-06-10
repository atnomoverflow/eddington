import { ROUTES } from "@constants";
import authGuard from "@guards/auth.guard";
import { createRouter, createWebHistory } from "vue-router";
import mainRouter from "./main.router";
import { lazyLoad } from "@helpers";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      ...ROUTES.HOME,
      component: () => lazyLoad(() => import("@pages/home/home.vue")),
      //beforeEnter: authGuard,
    },
    {
      ...ROUTES.SIGNUP,
      component: () => lazyLoad(() => import("@pages/Sign-up/sign-up.vue")),
      // beforeEnter: authGuard,
    },
    // {
    //   ...ROUTES.CONTACT_US,
    //   component: () => lazyLoad(() => import("@pages/contactUs/contactUs.vue")),
    //   beforeEnter: authGuard,
    // },
    // {
    //   ...ROUTES.RESET_PASSWORD,
    //   component: () =>
    //     lazyLoad(() => import("@pages/resetPassword/resetPassword.vue")),
    //   beforeEnter: authGuard,
    // },
    // {
    //   ...ROUTES.UPDATE_PASSWORD,
    //   component: () =>
    //     lazyLoad(() => import("@pages/updatePassword/updatePassword.vue")),
    //   beforeEnter: authGuard,
    // },
    // {
    //   ...ROUTES.MAIN,
    //   component: () => lazyLoad(() => import("@pages/main/main.vue")),
    //   //beforeEnter: authGuard,
    //   children: mainRouter as any,
    // },
    // {
    //   ...ROUTES.NOT_FOUND,
    //   redirect: ROUTES.SIGN_IN.name,
    // },
  ],
});
export default router;