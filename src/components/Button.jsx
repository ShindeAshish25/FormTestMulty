import React from "react";

const Button = ({ type, ButtonClassName, ButtonName, onClick,disabled }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={`${ButtonClassName} btn`}
        disabled={disabled}
      >
        {ButtonName}
      </button>
    </div>
  );
};

export default Button;
