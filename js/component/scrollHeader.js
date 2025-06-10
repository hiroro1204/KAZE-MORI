/**
 *  scrollHeader
 */

export const initializeScrollHeader = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".js-header");
    const headerNav = document.querySelector(".js-header-nav");
    const scrollTargetElement = document.querySelector(
      ".js-header-scrollTarget"
    );

    // 現在のスクロール位置を取得
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      if (window.scrollY < lastScrollY) {
        // 上方向へスクロールしたらheaderを見せる
        header.classList.remove("is-hidden");
        headerNav.classList.add("is-hidden");
      } else {
        // 下方向へスクロールしたらheaderを隠す
        header.classList.add("is-hidden");
      }
      lastScrollY = window.scrollY;
    });
  });
};
