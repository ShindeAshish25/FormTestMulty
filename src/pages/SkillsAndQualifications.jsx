import Button from "../components/Button";
import React, { useState } from "react";
import Title from "../components/Title";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";

const SkillsAndQualifications = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  let arr = [];

  // Handler for adding the item
  const handleAddItem = (e) => {
    e.preventDefault();
    console.log(items, "clicked");
    if (inputValue.trim() === "") return;
    arr.push(inputValue);
    setInputValue("");
    setItems((prev) => [...prev, ...arr]);
  };

  // Handler for removing an item
  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const InputValues = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center h100 w100">
        <div className="card w-50 mb-3">
          <div className="card-body p-4">
            <h4 className="card-title">
              <Title
                TitleName={"Skills And Qualifications"}
                Titleclass={"text-center"}
              />
            </h4>
            <form action="">
              <div className="d-flex align-itens-center mb-3">
                <InputField
                  type={"text"}
                  InputPlaceholder="Add Skill"
                  value={inputValue}
                  InputClassName={"me-3 "}
                  onChange={(e) => InputValues(e)}
                />

                <Button
                  onClick={(e) => handleAddItem(e)}
                  type={"button"}
                  ButtonName={"Add"}
                  ButtonClassName={"btn-primary "}
                />
              </div>
              <ul className="item-list">
                {items.map((item, index) => (
                  <span key={index}>
                    {item}
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="remove-button"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </ul>

              <div className="d-flex justify-content-between">
                <Button
                  type={"button"}
                  ButtonName={"Previous"}
                  ButtonClassName={"btn-primary"}
                  onClick={() => navigate("/WorkExperience")}
                />
                <Button
                  type={"button"}
                  ButtonName={"Next"}
                  ButtonClassName={"btn-primary"}
                  onClick={() => navigate("/AdditionalInformation")}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsAndQualifications;
