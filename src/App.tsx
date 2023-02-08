import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/Experience";
import Home from "./pages/home/Home";
import Personal from "./pages/personal/Personal";
import Resume from "./pages/resume/Resume";
import { EducationData, ExperienceData, PersonalInformation } from "./types";

function App() {
  const [data, setData] = useState<PersonalInformation>({
    firstName: "",
    lastName: "",
    about: "",
    email: "",
    number: "",
    image: null,
  });
  const [experienceData, setExperienceData] = useState<ExperienceData>({
    position: "",
    description: "",
    employer: "",
    startTime: "",
    endTime: "",
  });
  const [educationData, setEducationData] = useState<EducationData>({
    university: "",
    degree: "",
    universityEnd: "",
    educationDesc: "",
  });
  useEffect(() => {
    const getItem = localStorage.getItem("PersonalData" || "");
    if (getItem) {
      const parse = JSON.parse(getItem);
      setData(parse);
    }
  }, []);
  useEffect(() => {
    const getItem = localStorage.getItem("ExperienceData" || "");
    if (getItem) {
      const parse = JSON.parse(getItem);
      setExperienceData(parse);
    }
  }, []);
  useEffect(() => {
    const getItem = localStorage.getItem("EducationData" || "");
    if (getItem) {
      const parse = JSON.parse(getItem);
      setEducationData(parse);
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/personal"
          element={
            <Personal
              data={data}
              experienceData={experienceData}
              setData={setData}
              setEducationData={setEducationData}
              setExperienceData={setExperienceData}
              educationData={educationData}
            />
          }
        />
        <Route
          path="/experience"
          element={
            <Experience
              data={data}
              experienceData={experienceData}
              setData={setData}
              setEducationData={setEducationData}
              setExperienceData={setExperienceData}
              educationData={educationData}
            />
          }
        />
        <Route
          path="/education"
          element={
            <Education
              data={data}
              experienceData={experienceData}
              setData={setData}
              setEducationData={setEducationData}
              setExperienceData={setExperienceData}
              educationData={educationData}
            />
          }
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
