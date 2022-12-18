class ModalMenu {
  arrayMenuSections = [
    "sizes",
    "breads",
    "vegetables",
    "sauces",
    "fillings",
    "ready",
  ];

  constructor() {}

  render() {
    let modalMenu = "";
    modalMenu += /* html */ `
    <menu id="menu-modal">
    <input type="button" id="sizes" class='no-active-modal-menu' value="Размер">
    <input type="button" id="breads" class='no-active-modal-menu' value="Хлеб">
    <input type="button" id="vegetables" class='no-active-modal-menu' value="Овощи">
    <input type="button" id="sauces" class='no-active-modal-menu' value="Соусы">
    <input type="button" id="fillings" class='no-active-modal-menu' value="Начинка">
    <input type="button" id="ready" class='no-active-modal-menu' value="Готово!">
    </menu>
        
    `;

    return modalMenu;
  }
}
export default ModalMenu;
