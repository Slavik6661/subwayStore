let targets;
let menuActive = document.querySelectorAll(".navbar-menu a");
menuActive.forEach((element) => {
  element.addEventListener("click", (e) => {
    menuActive.forEach((element) => {
      element.classList.remove("active");
    });
    console.log("e.target", e.target);
    targets = e.target;
    e.target.classList.add("active");
    targets = targets.href.split("/")[3];
    sessionStorage.setItem("active", targets);
  });
});

window.addEventListener("load", () => {
  targets = sessionStorage.getItem("active", targets);
  menuActive.forEach((element) => {
    let element1 = element.href.split("/")[3];
    element1 = element1.split("#")[0];

    if (element1 === targets) {
      console.log(element);
      element.classList.add("active");
    }
  });
});
