interface TourImage {
  src: string;
  alt: string;
}

interface TourCardText {
  header: string;
  text: string;
}

interface TourLink {
  text: string;
  href: string;
}

interface TourInfo {
  duration: string;
  departure: string;
}

export { TourImage, TourCardText, TourLink, TourInfo };
