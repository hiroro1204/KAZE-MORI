/**
 *  onloadAnimation
 */

export const initializeOnloadAnimation = () => {
  const loadingScreen = document.querySelector(".js-loader");
  const loadingEndTime = 1000; // 読み込み完了した後の発火までの時間
  const kvText = document.querySelectorAll(".js-kv-text");

  // ロード完了時に実行する関数
  const onloadEverything = () => {
    // ロード完了時にローディング画面を非表示にする
    gsap.to(loadingScreen, {
      duration: 1.5,
      ease: "power2.out",
      y: "-100vh",
      onComplete: () => {
        loadingScreen.classList.add("is-loaded");
      },
    });

    // ロード完了時にKVテキストのフェードインを実行
    setTimeout(() => {
      kvText.forEach((text) => {
        text.classList.add("is-fade-in");
      });
    }, loadingEndTime);
  };

  // ロード完了時にローディング画面を非表示にする
  if (document.readyState === "complete") {
    onloadEverything();
  } else {
    window.addEventListener("load", onloadEverything, { once: true });
  }
};
