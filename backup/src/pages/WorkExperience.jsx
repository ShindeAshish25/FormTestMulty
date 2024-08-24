import React, { useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { update } from "../Redux/FormData";

const WorkExperience = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Initialize form data for the first row
  const [rows, setRows] = useState([
    { companyName: "", jobTitle: "", duration: "", id: 1 },
  ]);

  // Initialize form data with one entry for the first row
  const [formData, setFormData] = useState({
    companyName1: "",
    jobTitle1: "",
    duration1: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addRow = () => {
    const newRowId = rows.length + 1;
    setRows([
      ...rows,
      {
        companyName: "",
        jobTitle: "",
        duration: "",
        id: newRowId,
      },
    ]);

    // Add new row fields to formData state
    setFormData((prev) => ({
      ...prev,
      [`companyName${newRowId}`]: "",
      [`jobTitle${newRowId}`]: "",
      [`duration${newRowId}`]: "",
    }));
  };

  const removeRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
    setFormData((prev) => {
      const newFormData = { ...prev };
      delete newFormData[`companyName${id}`];
      delete newFormData[`jobTitle${id}`];
      delete newFormData[`duration${id}`];
      return newFormData;
    });
  };

  const handleChange = (id, field, value) => {
    setRows(
      rows.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
    handleFormChange({ target: { name: `${field}${id}`, value } });
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center h100 w100">
        <div className="card w-50 mb-3">
          <div className="card-body p-4">
            <h4 className="card-title">
              <Title TitleName={"Work Experience"} Titleclass={"text-center"} />
            </h4>
            <form action="">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Company Name</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={row.id} className="d-flax align-item-center">
                      <td className="d-flax align-item-center">
                        <InputField
                          InputType={"text"}
                          InputId={`companyName${row.id}`}
                          InputName={`companyName${row.id}`}
                          InputPlaceholder={"Enter Company Name"}
                          value={formData[`companyName${row.id}`]}
                          onChange={(e) =>
                            handleChange(row.id, "companyName", e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <InputField
                          InputType={"text"}
                          InputId={`jobTitle${row.id}`}
                          InputName={`jobTitle${row.id}`}
                          InputPlaceholder={"Enter Job Title"}
                          value={formData[`jobTitle${row.id}`]}
                          onChange={(e) =>
                            handleChange(row.id, "jobTitle", e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <InputField
                          InputType={"text"}
                          InputId={`duration${row.id}`}
                          InputName={`duration${row.id}`}
                          InputPlaceholder={"Enter Duration"}
                          value={formData[`duration${row.id}`]}
                          onChange={(e) =>
                            handleChange(row.id, "duration", e.target.value)
                          }
                        />
                      </td>
                      <td>
                        {index === rows.length - 1 ? (
                          <Button
                            type={"button"}
                            ButtonName={"Add"}
                            ButtonClassName={"btn-primary"}
                            onClick={addRow}
                          />
                        ) : (
                          <Button
                            type={"button"}
                            ButtonName={"Remove"}
                            ButtonClassName={"btn-danger"}
                            onClick={() => removeRow(row.id)}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
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
                  onClick={() => {
                    navigate("/SkillsAndQualifications");
                    dispatch(update(formData));
                  }}
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
