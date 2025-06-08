export const initializeHamburgerMenu = () => {
  const menu = document.querySelector(".js-menu");
  const button = document.querySelector(".js-button");
  const menuNavItems = document.querySelectorAll(".js-header-menu-nav-item");
  const overlay = document.querySelector(".l-header-overlay");
  const isActive = "is-active";

  // アニメーション実行中に付与するカスタムデータ属性
  const isRunning = "running";

  // コンテンツ Opening Keyframe
  const contentsOpeningKeyframes = {
    translate: ["100%", "0%"],
    visibility: ["hidden", "visible"],
  };

  // コンテンツ Opening Option
  const contentsOpeningOptions = {
    duration: 300,
    easing: "ease-out",
    fill: "forwards",
  };

  // コンテンツ Closing Keyframe
  const contentsClosingKeyframes = {
    translate: ["0%", "100%"],
    visibility: ["visible", "hidden"],
  };

  // コンテンツ Closing Option
  const contentsClosingOptions = {
    duration: 300,
    easing: "ease-out",
    fill: "forwards",
  };

  // menuとbuttonがページ内にない場合returnする
  if (!menu || !button) return;

  // メニューopenする関数
  const openMenu = () => {
    // アニメーション実行中用の値を付与
    button.dataset.animStatus = isRunning;

    menu.classList.add(isActive);
    button.classList.add(isActive);
    overlay.classList.add(isActive);
    // ページスクロールを無効化
    document.body.style.overflow = "hidden";

    /* アニメーション */
    const openingAnim = menu.animate(
      contentsOpeningKeyframes,
      contentsOpeningOptions
    );

    /* 終了コールバック */
    const unlock = () => {
      delete button.dataset.animStatus; // ロック解除
    };
    openingAnim.onfinish = unlock;
    openingAnim.oncancel = unlock;
  };

  // メニューcloseする関数
  const closeMenu = () => {
    // アニメーション実行中用の値を付与
    button.dataset.animStatus = isRunning;

    overlay.classList.remove(isActive);
    button.classList.remove(isActive);
    const closingAnim = menu.animate(
      contentsClosingKeyframes,
      contentsClosingOptions
    );

    /* 終了コールバック */
    const unlock = () => {
      menu.classList.remove(isActive);
      delete button.dataset.animStatus; // ロック解除
      document.body.style.overflow = ""; // ページスクロールを再度有効化
    };
    closingAnim.onfinish = unlock;
    closingAnim.oncancel = unlock;
  };

  // ボタンクリックでopen or close
  button.addEventListener("click", () => {
    // アニメーション中にクリックイベントを受け付けない(連打防止用)
    if (button.dataset.animStatus === isRunning) return;

    if (button.classList.contains(isActive)) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Escapeキーを押すと非表示
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // メニュー内のリンクをクリックしたらメニューを閉じる
  menuNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      closeMenu();
    });
  });
};
