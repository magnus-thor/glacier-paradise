import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import ContactUs from '@/views/ContactUs.vue';
import Terms from '@/views/Terms.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contactUs",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/terms",
    name: "Terms",
    component: Terms,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;