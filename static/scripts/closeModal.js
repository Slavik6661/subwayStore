function closeModal(modal, objActiveItemModal, id) {
  return (event) => {
    if (event.target.id === id) {
      modal.remove();
      sessionStorage.removeItem("resultSummaModal");
      localStorage.removeItem("customBurger");
      for (const key in objActiveItemModal) {
        delete objActiveItemModal[key];
      }
      let modalOverlay = document.getElementsByClassName("modal-overlay")[0];
      modalOverlay.remove();
    }
  };
}
