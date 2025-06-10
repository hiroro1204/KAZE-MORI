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

    /**
     *  headerNavを非表示にする
     *  IntersectionObserverを使用して、スクロールしたらheaderNavを非表示にする
     */

    // IntersectionObserverのOption
    // const observerOptions = {
    //   root: null,
    //   rootMargin: "0px",
    //   threshold: 0,
    // };

    // const headerNavVisibilityHandler = (entries) => {
    //   entries.forEach((entry) => {
    //     // ターゲットの要素の画面外に出た時に実行
    //     if (entry.isIntersecting) {
    //       scrollObserver.unobserve(scrollTargetElement);
    //     }
    //   });
    // };

    // const scrollObserver = new IntersectionObserver(
    //   headerNavVisibilityHandler,
    //   observerOptions
    // );

    // scrollObserver.observe(scrollTargetElement);

    /**
     *  headerを固定にする
     *  上方向へスクロールしたらheaderを表示し、下方向へスクロールしたらheaderを非表示にする
     */

    // 現在のスクロール位置を取得
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      if (window.scrollY < lastScrollY) {
        // 上方向へスクロールしたらheaderを見せる
        console.log("上方向へスクロールしたらheaderを見せる");
        header.classList.remove("is-hidden");
        headerNav.classList.add("is-hidden");
      } else {
        // 下方向へスクロールしたらheaderを隠す
        header.classList.add("is-hidden");
      }
      lastScrollY = window.scrollY;
      console.log(lastScrollY);
      console.log(window.scrollY);
    });
  });
};
