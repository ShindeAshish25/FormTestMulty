import React, { useState } from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Review = () => {
  const data = useSelector((state) => state.counter.value);
  console.log(data); 
  const navigate = useNavigate();

  const onSubmit = () => (
    Swal.fire({
      title: "Good job!",
      text: "Your application submited..!!",
      icon: "success"
    })
  )

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="card w-50 mb-3 shadow">
        <div className="card-body p-4">
          <h4 className="card-title">
            <Title
              TitleName={"Review Application"}
              Titleclass={"text-center text-danger mb-4"}
            />
          </h4>
          <form action="">
            <div className="mb-3">
              <Title
                TitleName={"Personal Information"}
                Titleclass={"fs-6 fw-bold"}
              />
              <div className="row">
                <div className="col-6"> <p>Name: {data?.name}</p></div>
                <div className="col-6"><p>Email: {data?.email}</p></div>
                <div className="col-6"><p>Phone: {data?.phone}</p></div>
                <div className="col-6"><p>Address: {data?.address}</p></div>
              </div>
              
            </div>
            <div className="mb-3">
              <Title
                TitleName={"Education Information"}
                Titleclass={"fs-6 fw-bold"}
              />
              <table className="table">
                <thead>
                  <tr>
                    <th >School/ institute Name</th>
                    <th >Board/University</th>
                    <th >CGPA</th>
                    <th >Passing year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SSC</td>
                    <td>{data?.sccBoard}</td>
                    <td>{data?.sccCGPA}</td>
                    <td>{data?.sccPassingYear}</td>
                  </tr>
                  <tr>
                    <td>HSC</td>
                    <td>{data?.sccBoard}</td>
                    <td>{data?.sccCGPA}</td>
                    <td>{data?.sccPassingYear}</td>
                  </tr>
                  <tr>
                    <td >Graduation</td>
                    <td>{data?.hscBoard}</td>
                    <td>{data?.hscCGPA}</td>
                    <td>{data?.hscPassingYear}</td>
                  </tr>
                  <tr>
                    <td >Post Graduation</td>
                    <td>{data?.postGraduationBoard}</td>
                    <td>{data?.postGraduationCGPA}</td>
                    <td>{data?.postGraduationPassingYear}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mb-3">
              <Title
                TitleName={"Work Experience"}
                Titleclass={"fs-6 fw-bold"}
              />
              <table className="table">
                <thead>
                  <tr>
                    <th >Company Name</th>
                    <th >Job Title</th>
                    <th >Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{data?.companyName1}</td>
                    <td>{data?.jobTitle1}</td>
                    <td>{data?.duration1}</td>
                  </tr>
                </tbody>
              </table>

            </div>
            <div className="mb-3">
              <Title
                TitleName={"Skills and Qualifications"}
                Titleclass={"fs-6 fw-bold"}
              /> 
              <div className="row">
              {data?.skills && data.skills.length > 0 ? (
                  data.skills.map((skill, index) => (
                    <div className="col-6">
                        <p key={index}>{skill}</p>
                    </div>
                  
                  ))
                ) : (
                  <li>No skills available</li>
                )} 
              </div>
              
            </div>
            <div className="mb-3">
              <Title
                TitleName={"Additional Information"}
                Titleclass={"fs-6 fw-bold"}
              />
              <p>File Name: {data?.file?.filename}</p>
            </div>


            <div className="d-flex justify-content-center">
              <Button
                type={"button"}
                ButtonName={"Submit your application"}
                ButtonClassName={"btn-primary"}
                onClick={() => {
                  navigate("/");
                  onSubmit()
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
