import { createWebHistory, createRouter } from "vue-router";

const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");
const ContactUs = () => import("@/views/ContactUs.vue");
const Terms = () => import("@/views/Terms.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      index: 1,
      enterClass: "",
      leaveClass: "",
      title: "Glacier paradise, special sightseing tours of Snæfellsjökull", // TODO Agnes: Update the sentence to use a few keywords to help with finding the page, max 55 chars  -> https://www.seobility.net/en/wiki/Meta_Title
      description: "1", // TODO Agnes: add a description of the website/page -> https://www.seobility.net/en/wiki/Meta_Description
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
      title: "",
      description: "2",
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
      title: "",
      description: "3",
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
      title: "",
      description: "4",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  // TODO: When live check if pages have correct info in google search
  document.title = to.meta.title;
  document.getElementById("metaDescription").content = to.meta.description;
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
