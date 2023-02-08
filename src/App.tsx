import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/Experience";
import Home from "./pages/home/Home";
import Personal from "./pages/personal/Personal";
import Resume from "./pages/resume/Resume";
import { ExperienceData, PersonalInformation } from "./types";

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
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/personal"
          element={<Personal data={data} setData={setData} />}
        />
        <Route
          path="/experience"
          element={
            <Experience
              data={data}
              experienceData={experienceData}
              setExperienceData={setExperienceData}
            />
          }
        />
        <Route path="/education" element={<Education />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
