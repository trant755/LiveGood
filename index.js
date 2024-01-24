(function () {
  const pathname = window.location.pathname;

  if (!pathname.includes("instruction")) return;

  const isRegister = window.location.hash === "#register";

  if (!isRegister) return;

  const form = document.querySelector(".register-form");

  window.scrollTo({
    top: form.offsetTop,
    behavior: "smooth",
  });
})();

const registerBtnPage3 = document.querySelector(".register-btn-page-3");

if (registerBtnPage3) {
  registerBtnPage3.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.querySelector(".register-form");

    window.scrollTo({
      top: form.offsetTop,
      behavior: "smooth",
    });
  });
}
