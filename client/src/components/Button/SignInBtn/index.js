import React from "react";

const SignInBtn = props => {
  return (
    <button className="btn btn-dark margin-btn" onClick={e => props.onClick(props)} > {props.text} </button>
  );
};

export default SignInBtn;
