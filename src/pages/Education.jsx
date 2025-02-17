import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";
import { update } from "../Redux/FormData";
import { useDispatch, useSelector } from "react-redux";

const Education = () => {
  const oldData = useSelector((state) => state.counter.value)
  console.log("oldData", oldData);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [formData, setFormData] = useState({
    sccBoard: "",
    sccCGPA: "",
    sccPassingYear: "",
    hscBoard: "",
    hscCGPA: "",
    hscPassingYear: "",
    graduationBoard: "",
    graduationCGPA: "",
    graduationPassingYear: "",
    postGraduationBoard: "",
    postGraduationCGPA: "",
    postGraduationPassingYear: "",
  });
  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const handelForm = (e) => {
    const { name, value } = e?.target;
    setFormData((prev) => ({ ...oldData, ...prev, [name]: value }));
    console.log(e.target.name, e.target.value);
  };

  useEffect(() => { 
    const { sccBoard, sccCGPA, sccPassingYear, hscBoard, hscCGPA,hscPassingYear,graduationBoard, graduationCGPA,graduationPassingYear,postGraduationBoard, postGraduationCGPA, postGraduationPassingYear} = formData;
    setIsFormComplete(sccBoard && sccCGPA && sccPassingYear && hscBoard && hscCGPA && hscPassingYear && graduationBoard && graduationCGPA && graduationPassingYear && postGraduationBoard && postGraduationCGPA && postGraduationPassingYear);
  }, [formData]);

  console.log(formData);


  return (
    <div className="d-flex justify-content-center align-items-center h100 w100">
      <div className="card w-50 mb-3 shadow">
        <div className="card-body p-4">
          <h4 className="card-title">
            <Title
              TitleName={"Education Information"}
              Titleclass={"text-center text-danger mb-4"}
            />
          </h4>
          <form action="">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">School/ institute Name</th>
                  <th scope="col">Board/University</th>
                  <th scope="col">CGPA</th>
                  <th scope="col">Passing year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="d-flax align-item-center">
                  <td>SSC</td>
                  <td className="d-flax align-item-center">
                    <InputField
                      InputType={"text"}
                      InputId={"sccBoard"}
                      InputName={"sccBoard"}
                      InputPlaceholder={"Enter Board/University"}
                      onChange={(e) => handelForm(e)}
                    />
                  </td>
                  <td>
                    <InputField
                      InputType={"text"}
                      InputId={"sccCGPA"}
                      InputName={"sccCGPA"}
                      InputPlaceholder={"Enter CGPA"}
                      onChange={(e) => handelForm(e)}
                    />
                  </td>
                  <td>
                    <InputField
                      InputType={"text"}
                      InputId={"sccPassingYear"}
                      InputName={"sccPassingYear"}
                      InputPlaceholder={"Enter Passing year"}
                      onChange={(e) => handelForm(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>HSC</td>
                  <td className="d-flax align-item-center">
                    <InputField
                      InputType={"text"}
                      InputId={"hscBoard"}
                      InputName={"hscBoard"}
                      InputPlaceholder={"Enter Board/University"}
                      onChange={(e) => handelForm(e)}
                    />
                  </td>
                  <td>
                    <InputField
                      InputType={"text"}
                      InputId={"hscCGPA"}
                      InputName={"hscCGPA"}
                      InputPlaceholder={"Enter CGPA"}
                      onChange={(e) => handelForm(e)}
                    />
                  </td>
                  <td>
                    <InputField
                      InputType={"text"}
                      InputId={"hscPassingYear"}
                      InputName={"hscPassingYear"}
                      InputPlaceholder={"Enter Passing year"}
                      onChange={(e) => handelForm(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Graduation</td>
                  <td className="d-flax align-item-center">
                    <InputField
                      InputType={"text"}
                      InputId={"graduationBoard"}
                      InputName={"graduationBoard"}
                      InputPlaceholder={"Enter Board/University"}
                      onChange={(e) => handelForm(e)}
                    />
                  </td>
                  <td>
                    <InputField
                      InputType={"text"}
                      InputId={"graduationCGPA"}
                      InputName={"graduationCGPA"}
                      InputPlaceholder={"Enter CGPA"}
                      onChange={(e) => handelForm(e)}
                    />
                  </td>
                  <td>
                    <InputField
                      InputType={"text"}
                      InputId={"graduationPassingYear"}
                      InputName={"graduationPassingYear"}
                      InputPlaceholder={"Enter Passing year"}
                      onChange={(e) => handelForm(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Post Graduation</td>
                  <td className="d-flax align-item-center">
                    <InputField
                      InputType={"text"}
                      InputId={"postGraduationBoard"}
                      InputName={"postGraduationBoard"}
                      InputPlaceholder={"Enter Board/University"}
                      onChange={(e) => handelForm(e)}
                    />
                  </td>
                  <td>
                    <InputField
                      InputType={"text"}
                      InputId={"postGraduationCGPA"}
                      InputName={"postGraduationCGPA"}
                      InputPlaceholder={"Enter CGPA"}
                      onChange={(e) => handelForm(e)}
                    />
                  </td>
                  <td>
                    <InputField
                      InputType={"text"}
                      InputId={"postGraduationPassingYear"}
                      InputName={"postGraduationPassingYear"}
                      InputPlaceholder={"Enter Passing year"}
                      onChange={(e) => handelForm(e)}
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
                onClick={() => navigate("/")}
              />
              <Button
                type={"button"}
                ButtonName={"Next"}
                ButtonClassName={"btn-primary"}
                disabled={!isFormComplete} 
                onClick={() => {
                  navigate("/WorkExperience");
                  dispatch(update(formData)); 
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Education;
