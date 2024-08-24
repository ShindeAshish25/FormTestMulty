import React from "react";
import { Route, Routes } from "react-router-dom";
import PersonalInformation from "./pages/PersonalInformation";
import Education from "./pages/Education";
import { BrowserRouter } from "react-router-dom";
import WorkExperience from "./pages/WorkExperience";
import SkillsAndQualifications from "./pages/SkillsAndQualifications";
import AdditionalInformation from "./pages/AdditionalInformation";
import Review from "./pages/Review";

export const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PersonalInformation />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/WorkExperience" element={<WorkExperience />} />
          <Route
            path="/SkillsAndQualifications"
            element={<SkillsAndQualifications />}
          />
          <Route
            path="/AdditionalInformation"
            element={<AdditionalInformation />}
          />
          <Route
            path="/Review"
            element={<Review />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
