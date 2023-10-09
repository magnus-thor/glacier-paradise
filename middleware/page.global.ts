export default defineNuxtRouteMiddleware((to, from) => {
  const pageIndexes: { [propKey: string]: number } = {
    "/": 1,
    "/tours": 2,
    "/about": 3,
    "/contactUs": 4,
    "/terms": 5,
    "/tours/midnight-sun": 2,
    "/tours/snow-cat": 2,
  };

  const getPageIndex = (name: string) => {
    return pageIndexes[name] || 1;
  };

  const toPageIndex = getPageIndex(to.path);
  const fromPageIndex = getPageIndex(from.path);

  if (toPageIndex === 1 || fromPageIndex === 1) {
    if (toPageIndex > fromPageIndex) {
      to.meta.pageTransition = { name: "page-left" };
      from.meta.pageTransition = { name: "page-index" };
    } else {
      to.meta.pageTransition = { name: "page-index" };
      from.meta.pageTransition = { name: "page-right" };
    }
  } else if (toPageIndex > fromPageIndex) {
    to.meta.pageTransition = { name: "page-left" };
    from.meta.pageTransition = { name: "page-left" };
  } else if (toPageIndex === fromPageIndex) {
    if (to.name === "tours-midnight-sun" || to.name === "tours-snow-cat") {
      to.meta.pageTransition = { name: "page-down" };
      from.meta.pageTransition = { name: "page-down" };
    } else {
      to.meta.pageTransition = { name: "page-up" };
      from.meta.pageTransition = { name: "page-up" };
    }
  } else {
    to.meta.pageTransition = { name: "page-right" };
    from.meta.pageTransition = { name: "page-right" };
  }
});
