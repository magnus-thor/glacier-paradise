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
      title: "Glacier paradise, special sightseing tours of Snæfellsjökull",
      description:
        "Discover the natural wonders of Snæfellsjökull with our exciting tours. Explore the stunning glacier and breathtaking landscapes of the peninsula. Book your adventure today!",
    },
  },

  {
    path: "/tours",
    component: Tours,
    meta: {
      index: 2,
      enterClass: "",
      leaveClass: "",
      title: "Explore Snæfellsjökull with our Exciting Tour Packages",
      description:
        "Choose from our carefully curated tour packages and experience the beauty and adventure of Snæfellsjökull. Our tours offer a variety of options, including glacier exploration, mountain passes, and more. Book your tour today and create unforgettable memories in one of Iceland's most stunning locations.",
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
          title: "Explore Snæfellsjökull with our Exciting Tour Packages",
          description:
            "Choose from our carefully curated tour packages and experience the beauty and adventure of Snæfellsjökull. Our tours offer a variety of options, including glacier exploration, mountain passes, and more. Book your tour today and create unforgettable memories in one of Iceland's most stunning locations.",
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
          title:
            " Snæfellsjökull Glacier Tour: Explore the Energy of Iceland's Iconic Landmark",
          description:
            "Embark on a journey to the top of Snæfellsjökull Glacier and discover the breathtaking views of the gulf of Faxaflói, Reykjavík, and Keflavík. Learn about the inspiration behind literary works such as 'Christianity Under the Glacier' and 'Journey to the Center of the Earth.' Book your tour now for a chance to unearth the fantasy of Snæfellsjökull.",
        },
      },
      {
        path: "midnight-sun",
        name: "Midnight sun tour",
        component: MidnightSunTour,
        props: true,
        meta: {
          index: 2,
          enterClass: "",
          leaveClass: "",
          title:
            "Snæfellsjökull Midnight Sun Tour | Explore the Glacier by Snow-Cat",
          description:
            "Experience the magic of the midnight sun on our Snæfellsjökull “Midnight sun tour” departing from Anarstapi. Enjoy the spectacular views of the glacier and surrounding area on this 3-4 hour adventure. Snæfellsjökull is located on the western tip of the Snæfellsnes peninsula, where the warm summer air and never-ending daylight make for a unique and unforgettable experience. Take a snow-cat tour to explore the glacier and surrounding area for a truly memorable experience. As the sun dips low on the horizon, watch the sky turn pink and gold, casting a warm glow over the glacier. Book now for an unforgettable summer adventure in Snæfellsjökull.",
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
      title: "About Glacier Paradise | Our Story and Mission",
      description:
        "Learn about Glacier Paradise and our mission to provide unique and unforgettable experiences in Iceland. Discover our story, team, and commitment to sustainable tourism.",
    },
  },
  {
    path: "/contactUs/:subject?",
    name: "ContactUs",
    component: ContactUs,
    meta: {
      index: 4,
      enterClass: "",
      leaveClass: "",
      title: "Contact Glacier Paradise | Get in Touch with Us",
      description:
        "Have a question or need help planning your Iceland adventure? Contact Glacier Paradise and our friendly team will be happy to assist you. Find our phone number, email, and address on this page.",
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
      title: "Terms of Service | Glacier Paradise",
      description:
        "Read our Terms of Service to understand your rights and obligations when using our website. By accessing our site, you agree to be bound by these terms, so please read them carefully. Contact us if you have any questions or concerns.",
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
  document.getElementById("footer__container").classList.add("hide");
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
  app;
  document.getElementById("footer__container").classList.remove("hide");
});

export default router;
