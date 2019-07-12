import React from "react";

const DeleteBtn = props => {
  return (
    <a href="/">
      <button className="btn btn-light margin-btn" type="reset">
        {props.text}
      </button>
    </a>
  );
};

export default DeleteBtn;