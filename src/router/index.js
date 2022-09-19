import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import ContactUs from "@/views/ContactUs.vue";
import Terms from "@/views/Terms.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      index: 1,
      enterClass: "",
      leaveClass: "",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      index: 2,
      enterClass: "",
      leaveClass: "",
    },
  },
  {
    path: "/contactUs",
    name: "ContactUs",
    component: ContactUs,
    meta: {
      index: 3,
      enterClass: "",
      leaveClass: "",
    },
  },
  {
    path: "/terms",
    name: "Terms",
    component: Terms,
    meta: {
      index: 4,
      enterClass: "",
      leaveClass: "",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  const FadeInRight = "animate__animated animate__fadeInRight";
  const FadeInLeft = "animate__animated animate__fadeInLeft";
  const FadeOutLeft = "animate__animated animate__fadeOutLeft";
  const FadeOutRight = "animate__animated animate__fadeOutRight";
  if (to.meta.index > from.meta.index) {
    to.meta.enterClass = FadeInRight;
    to.meta.leaveClass = FadeOutLeft;
  } else {
    to.meta.enterClass = FadeInLeft;
    to.meta.leaveClass = FadeOutRight;
  }
});

export default router;
