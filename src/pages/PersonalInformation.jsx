import React, { useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { update } from "../Redux/FormData";

const PersonalInformation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const dispatch = useDispatch();

  const handelForm = (e) => {
    const { name, value } = e?.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(e.target.name, e.target.value);
  };
  console.log(formData);
  return (
    <div className="d-flex justify-content-center align-items-center h100 w100">
      <div className="card w-50 mb-3">
        <div className="card-body p-4">
          <h4 className="card-title">
            <Title
              TitleName={"Personal Information"}
              Titleclass={"text-center"}
            />
          </h4>
          <form action="">
            <div className="mb-3">
              <InputField
                labelName={"Name :"}
                InputType={"text"}
                InputId={"name"}
                InputName={"name"}
                InputPlaceholder={"Enter Name"}
                onChange={(e) => handelForm(e)}
              />
            </div>
            <div className="mb-3">
              <InputField
                labelName={"Email :"}
                InputType={"email"}
                InputId={"email"}
                InputName={"email"}
                InputPlaceholder={"Enter email"}
                onChange={(e) => handelForm(e)}
              />
            </div>
            <div className="mb-3">
              <InputField
                labelName={"Phone :"}
                InputType={"phone"}
                InputId={"phone"}
                InputName={"phone"}
                InputPlaceholder={"Enter phone"}
                onChange={(e) => handelForm(e)}
              />
            </div>
            <div className="mb-3">
              <InputField
                labelName={"Address :"}
                InputType={"address"}
                InputId={"address"}
                InputName={"address"}
                InputPlaceholder={"Enter address"}
                onChange={(e) => handelForm(e)}
              />
            </div>
            <div className="d-flex justify-content-end ">
              <Button
                // type={"button"}
                onClick={() => {
                  navigate("/Education");
                  dispatch(update(formData));
                }}
                ButtonName={"Next"}
                ButtonClassName={"btn-primary"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
