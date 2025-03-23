import { createRouter, createWebHistory } from "vue-router";
import Clock from "@/components/Clock.vue";
import SearchInput from "@/components/SearchInput.vue";
import UserStatus from "@/components/UserStatus.vue";
import FormValidator from "@/components/FormValidator.vue";
import WebsocketView from "@/components/WebsocketView.vue";
import StateToggle from "@/components/StateToggle.vue";

import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Clock },
  { path: "/search", component: SearchInput },
  { path: "/user", component: UserStatus },
  { path: "/form", component: FormValidator },
  { path: "/ws", component: WebsocketView },
  { path: "/toggle", component: StateToggle },
  { path: "/:pathMatch(.*)*", redirect: "/" }, // fallback route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.onError((error) => {
  console.error(error);
});

export default router;