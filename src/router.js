import { createRouter, createWebHistory } from "vue-router";

import CoachDetail from "./pages/coaches/CoachDetail.vue";
import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachReg from "./pages/coaches/CoachReg.vue";

import ContactCoach from "./pages/requests/ContactCoach.vue";
import ReqsRecieved from "./pages/requests/ReqsRecieved.vue";

import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachDetail,
      props: true,
      children: [{ path: "contact", component: ContactCoach }],
    },
    { path: "/register", component: CoachReg },
    { path: "/requests", component: ReqsRecieved },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
