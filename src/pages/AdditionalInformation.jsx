import React, { useState } from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const AdditionalInformation = () => {
  const [selectedfile, SetSelectedFile] = useState([]);
  const [Files, SetFiles] = useState([]);

  const navigate = useNavigate();

  const filesizes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const InputChange = (e) => {
    // --For Multiple File Input
    let images = [];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push(e.target.files[i]);
      let reader = new FileReader();
      let file = e.target.files[i];
      reader.onloadend = () => {
        SetSelectedFile((preValue) => {
          return [
            ...preValue,
            {
              filename: e.target.files[i].name,
              filetype: e.target.files[i].type,
              fileimage: reader.result,
              datetime:
                e.target.files[i].lastModifiedDate.toLocaleString("en-IN"),
              filesize: filesizes(e.target.files[i].size),
            },
          ];
        });
      };
      if (e.target.files[i]) {
        reader.readAsDataURL(file);
      }
    }
  };

  const DeleteSelectFile = (id) => {
    if (window.confirm("Are you sure you want to delete this Image?")) {
      const result = selectedfile.filter((data) => data.id !== id);
      SetSelectedFile(result);
    } else {
      // alert('No');
    }
  };

  const FileUploadSubmit = async (e) => {
    e.preventDefault();

    // form reset on submit
    e.target.reset();
    if (selectedfile.length > 0) {
      for (let index = 0; index < selectedfile.length; index++) {
        SetFiles((preValue) => {
          return [...preValue, selectedfile[index]];
        });
      }
      SetSelectedFile([]);
    } else {
      alert("Please select file");
    }
  };

  const DeleteFile = async (id) => {
    if (window.confirm("Are you sure you want to delete this Image?")) {
      const result = Files.filter((data) => data.id !== id);
      SetFiles(result);
    } else {
      // alert('No');
    }
  };
  return (
    <>
      <div className="fileupload-view d-flex justify-content-center align-items-center h100 w100">
        <div className="card w-50 mt-5">
          <div className="card-body p-4">
            <h4 className="card-title">
              <Title
                TitleName={"Additional Information"}
                Titleclass={"text-center"}
              />
            </h4>

            <form onSubmit={FileUploadSubmit}>
              <div className="kb-file-upload">
                <div className="file-upload-box">
                  <input
                    type="file"
                    id="fileupload"
                    className="file-upload-input"
                    onChange={InputChange}
                    multiple
                  />
                  <span>
                    Drag and drop or{" "}
                    <span className="file-link">Choose your files</span>
                  </span>
                </div>
              </div>
              <div className=" mb-3">
                {selectedfile.map((data, index) => {
                  const { id, filename, datetime, filesize } = data;
                  return (
                    <div className="file-atc-box" key={id}>
                      <div className="file-detail">
                        <h6>{filename}</h6>
                        <p></p>
                        <p>
                          <span>Size : {filesize}</span>
                          <span className="ml-2">
                            Modified Time : {datetime}
                          </span>
                        </p>
                        <div className="file-actions">
                          <button
                            type="button"
                            className="file-action-btn"
                            onClick={() => DeleteSelectFile(id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="kb-buttons-box">
                <button type="submit" className="btn btn-primary form-submit">
                  Upload
                </button>
              </div>
            </form>
            {Files.length > 0 ? (
              <div className="kb-attach-box">
                <hr />
                {Files.map((data, index) => {
                  const { id, filename, filesize } = data;
                  return (
                    <div className="file-atc-box" key={index}>
                      <div className="file-detail">
                        <h6>{filename}</h6>
                        <p>
                          <span>Size : {filesize}</span>
                        </p>
                        <div className="file-actions">
                          <button
                            className="file-action-btn"
                            onClick={() => DeleteFile(id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
            <div className="d-flex justify-content-between mt-3">
              <Button
                type={"button"}
                ButtonName={"Previous"}
                ButtonClassName={"btn-primary"}
                onClick={() => navigate("/SkillsAndQualifications")}
              />
              <Button
                type={"button"}
                ButtonName={"Next"}
                ButtonClassName={"btn-primary"}
                onClick={() => navigate("/Review")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalInformation;
