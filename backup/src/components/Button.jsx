import React from "react";

const Button = ({ type, ButtonClassName, ButtonName, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={`${ButtonClassName} btn`}
      >
        {ButtonName}
      </button>
    </div>
  );
};

export default Button;
