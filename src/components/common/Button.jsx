import React from "react";
import "./button.css";

export const Button = ({ title, onClickHandler }) => {
  return (
    <div className="btn_container" onClick={onClickHandler}>
      <button type="button" className="common_btn">
        {title}
      </button>
    </div>
  );
};
