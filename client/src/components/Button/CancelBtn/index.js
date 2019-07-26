
import React from "react";

const CancelBtn = props => {
  return (
    <a href="/">
      <button className="btn btn-light margin-btn" type="reset">
        {props.text}
      </button>
    </a>
  );
};

export default CancelBtn;