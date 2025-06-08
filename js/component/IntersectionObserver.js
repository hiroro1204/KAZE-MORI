/**
 * IntersectionObserver
 */

export const initializeIntersectionObserver = () => {
  const aboutText = document.querySelectorAll(".js-top-about-text");
  const scrollTargetElement = document.querySelector(".js-about-scrollTarget");

  // IntersectionObserverのOption
  const observerOptions = {
    root: null,
    rootMargin: "-50% 0px",
    threshold: 0,
  };

  // aboutTextを表示
  const showAboutText = () => {
    aboutText.forEach((text) => {
      text.classList.add("is-fade-in");
    });
  };

  const aboutTextVisibilityHandler = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        showAboutText();
        scrollObserver.unobserve(scrollTargetElement);
      }
    });
  };

  const scrollObserver = new IntersectionObserver(
    aboutTextVisibilityHandler,
    observerOptions
  );
  scrollObserver.observe(scrollTargetElement);
};
