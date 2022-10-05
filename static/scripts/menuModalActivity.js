function menuModalActivity(objActiveItemModal) {
  let menuModalActive = document.querySelectorAll("#menu-modal input");
  let backButton = document.getElementById("back");
  let nextButton = document.getElementById("next");
  backButton.style.display = "none";
  let array = [];
  let nextElement;
  let index = 0;

  menuModalActive.forEach((element) => {
    array.push(element);
  });

  window.addEventListener("click", (event) => {
    if (index < 5) {
      nextButton.style.display = "block";
    } else {
      nextButton.style.display = "none";
    }
    if (event.target.id === "next") {
      if (index < array.length - 1) {
        menuModalActive.forEach((element) => {
          element.classList.remove("active-modal-menu");
          element.classList.add("no-active-modal-menu");
        });

        index++;
        array[index].className = "active-modal-menu";
        nextElement = array[index];
        let categoryMenu = nextElement.value;
        setTimeout(() => {
          array[index].click();
        }, 1);
      } else {
        array[index].className = "active-modal-menu";
      }
    }
    if (index < 5) {
      backButton.style.display = "block";
    } else {
      backButton.style.display = "none";
    }
    if (event.target.id === "back") {
      array[index].className = "no-active-modal-menu";
      if (index < 5) {
        index--;
        console.log(index);
        array[index].className = "active-modal-menu";
        nextElement = array[index];
        console.log(nextElement);
        setTimeout(() => {
          nextElement.click();
        }, 1);
      } else {
        array[index].className = "active-modal-menu";
      }
    }
  });
}
