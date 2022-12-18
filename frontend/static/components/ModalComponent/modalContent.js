// import ModalMenu from "./modalMenuComponent";
// import ModalCard from "./modalCardComponent";

// class ModalContent {
//   modalHtml = "";

//   modalMenu;

//   modalCard;

//   constructor(content) {
//     this.content = content;
//     this.modalMenu = new ModalMenu();
//     this.modalCard = new ModalCard(content);
//   }

//   render() {
//     console.log("modalComponent Render");
//     this.modalHtml = /* html */ `

//             <dialog id="modal-content">
//                 <div id="modal-top">
//                     <input type="button" name="close-modal" id="close-modal" value="X"/>
//                 </div>
//                 <form method="dialog" class='modal-form'>
//                     ${this.modalMenu.render()}
//                     <div class="button-next-Ingredients">
//                         <input type="button" id="back" value="< НАЗАД"/>
//                         <input type="button" id="next" value="ВПЕРЕД >">
//                     </div>
//                     <ul id="size-selection">
//                         ${this.modalCard.render()}
//                     </ul>
//                     <div id="modal-bottom">
//                     <p>Итого:${1} руб</p>
//                     </div>
//                 </form>
//             </dialog>

//         `;
//   }
// }

// export default ModalContent;
