import React from "react";
debugger;
const ModalCard = (props) => {
  let element = props.modalMenuItem;
  const { active } = props;
  console.log(element[1].bacon);
  let menuCategory = element[0];
  if (menuCategory === "sizes") {
    return (
      <div
        className={`selected ${active ? "dd" : ""}`}
        id={"id-modal-card-" + menuCategory}
      >
        <div className="background">
          <img src={"/static/" + element[1]["1x"].image} />
          {console.log(element[1]["1x"].image)}
        </div>
        <p>{element[1].name}</p>
        <hr />
        <p>{element.price} руб</p>
      </div>
    );
  }
};

export default ModalCard;
