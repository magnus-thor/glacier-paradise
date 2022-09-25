interface CardImage {
  src: string;
  alt: string;
}

interface CardText {
  header: string;
  text: string;
}

interface CardLink {
  text: string;
  href: string;
}

interface CardInfo {
  duration: string;
  departure: string;
}

export { CardImage, CardText, CardLink, CardInfo };
