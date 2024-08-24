import React from "react";

const InputField = ({
  onChange,
  labelName,
  forLable,
  InputClassName = "",
  InputId,
  InputType,
  InputPlaceholder,
  InputName,
  value,
}) => {
  return (
    <>
      <label for={forLable} class="form-label">
        {labelName}
      </label>
      <input
        onChange={onChange}
        className={`${InputClassName} form-control`}
        type={InputType}
        value={value}
        id={InputId}
        name={InputName}
        placeholder={InputPlaceholder}
      />
    </>
  );
};

export default InputField;
