import React from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";

const WorkExperience = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center h100 w100">
        <div className="card w-50 mb-3">
          <div className="card-body p-4">
            <h4 className="card-title">
              <Title TitleName={"Work Experience"} Titleclass={"text-center"} />
            </h4>
            <form action="">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Company Name</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="d-flax align-item-center">
                    <td className="d-flax align-item-center">
                      <InputField
                        InputType={"text"}
                        InputId={"name"}
                        InputName={"name"}
                        InputPlaceholder={"Enter Name"}
                      />
                    </td>
                    <td>
                      <InputField
                        InputType={"text"}
                        InputId={"name"}
                        InputName={"name"}
                        InputPlaceholder={"Enter Name"}
                      />
                    </td>
                    <td>
                      <InputField
                        InputType={"text"}
                        InputId={"name"}
                        InputName={"name"}
                        InputPlaceholder={"Enter Name"}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="d-flex justify-content-between">
                <Button
                  type={"button"}
                  ButtonName={"Previous"}
                  ButtonClassName={"btn-primary"}
                  onClick={() => navigate("/Education")}
                />
                <Button
                  type={"button"}
                  ButtonName={"Next"}
                  ButtonClassName={"btn-primary"}
                  onClick={() => navigate("/SkillsAndQualifications")}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
