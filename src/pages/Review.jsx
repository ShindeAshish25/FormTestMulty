import React, { useState } from "react";
import Button from "../components/Button";
import Title from "../components/Title";

const Review = () => {

  const [formData, setFormData] = useState();

  return(
    <div className="d-flex justify-content-center align-items-center h100 w100">
        <div className="card w-50 mb-3">
          <div className="card-body p-4">
            <h4 className="card-title">
              <Title
                TitleName={"Review Applicartion"}
                Titleclass={"text-center"}
              />
            </h4>
            <form action="">
            <div className="mb-3">
            <h5>Personal Information</h5>
            <p>Name: </p>
            <p>Email: </p>
            <p>Phone: </p>
            <p>Address: </p>
          </div>
          <div className="mb-3">
            <h5>Education Information</h5>
            <p>SSC Board: </p>
            <p>SSC CGPA: </p>
            <p>SSC CGPA: </p>
           
          </div>
          <div className="mb-3">
            <h5>Work Experience</h5>
            <p>Company Name 1:</p>
          
          </div>
          <div className="mb-3">
            <h5>Skills and Qualifications</h5>
           
          </div>
          <div className="mb-3">
            <h5>Additional Information</h5>
           
          </div>
              

              <div className="d-flex justify-content-center">
                <Button
                  type={"button"}
                  ButtonName={"Submit your application"}
                  ButtonClassName={"btn-primary"}
                  
                />  
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Review;
