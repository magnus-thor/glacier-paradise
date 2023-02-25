import { createWebHistory, createRouter } from "vue-router";

const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");
const ContactUs = () => import("@/views/ContactUs.vue");
const Terms = () => import("@/views/Terms.vue");
const Tours = () => import("@/views/Tours.vue");
const TopOfTheDiamondTour = () =>
  import("@/components/tourComponents/top-of-the-diamond-tour.vue");
const MidnightSunTour = () =>
  import("@/components/tourComponents/midnight-sun-tour.vue");
const OtherTours = () => import("@/components/tourComponents/other-tours.vue");
const TourCards = () => import("@/components/tourComponents/tour-cards.vue");

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
    path: "/tours",
    component: Tours,
    meta: {
      index: 2,
      enterClass: "",
      leaveClass: "",
      title: "",
      description: "4",
    },
    children: [
      {
        path: "",
        name: "Tour cards",
        component: TourCards,
        meta: {
          index: 2,
          enterClass: "",
          leaveClass: "",
          title: "",
          description: "3",
        },
      },
      {
        path: "snow-cat",
        name: "Snow cat tour",
        component: TopOfTheDiamondTour,
        meta: {
          index: 2,
          enterClass: "",
          leaveClass: "",
          title: "",
          description: "3",
        },
      },
      {
        path: "midnight-sun",
        name: "Midnight sun tour",
        component: MidnightSunTour,
        meta: {
          index: 2,
          enterClass: "",
          leaveClass: "",
          title: "",
          description: "3",
        },
      },
      {
        path: "other",
        name: "Other tours",
        component: OtherTours,
        meta: {
          index: 4,
          enterClass: "",
          leaveClass: "",
          title: "",
          description: "3",
        },
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      index: 3,
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
      index: 4,
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
      index: 5,
      enterClass: "",
      leaveClass: "",
      title: "",
      description: "5",
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
  const samePageLeave = "animate__animated animate__backOutDown";
  const samePageEnter = "animate__animated animate__fadeInDown";
  if (to.meta.index > from.meta.index) {
    to.meta.enterClass = FadeInRight;
    to.meta.leaveClass = FadeOutLeft;
  } else if (to.meta.index === from.meta.index) {
    to.meta.enterClass = samePageEnter;
    to.meta.leaveClass = samePageLeave;
  } else {
    to.meta.enterClass = FadeInLeft;
    to.meta.leaveClass = FadeOutRight;
  }
});

export default router;
