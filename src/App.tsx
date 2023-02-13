import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/Experience";
import Home from "./pages/home/Home";
import Personal from "./pages/personal/Personal";
import Resume from "./pages/resume/Resume";
import axios from "axios";
import { EducationData, ExperienceData, PersonalInformation } from "./types";

function App() {
  const [imageDataUri, setImageDataUri] = useState<string>("");
  const [resume, setResume] = useState<any>();
  const [degree, setDegree] = useState<any>();
  const [data, setData] = useState<PersonalInformation>({
    firstName: "",
    lastName: "",
    about: "",
    email: "",
    number: "",
    image: null,
  });
  const [experienceData, setExperienceData] = useState<ExperienceData[]>([
    {
      position: "",
      description: "",
      employer: "",
      startTime: "",
      endTime: "",
    },
  ]);
  const [educationData, setEducationData] = useState<EducationData[]>([
    {
      university: "",
      degree: "",
      universityEnd: "",
      educationDesc: "",
    },
  ]);
  useEffect(() => {
    const getItem = localStorage.getItem("PersonalData" || "");
    if (getItem) {
      const parse = JSON.parse(getItem);
      setData(parse);
    }
    const getImage = localStorage.getItem("image" || "");
    if (getImage) {
      setImageDataUri(getImage);
    }
    const getExperience = localStorage.getItem("ExperienceData" || "");
    if (getExperience) {
      const parse = JSON.parse(getExperience);
      setExperienceData(parse);
    }
    const getEducation = localStorage.getItem("EducationData" || "");
    if (getEducation) {
      const parse = JSON.parse(getEducation);
      setEducationData(parse);
    }
  }, []);
  useEffect(() => {
    const getDegree = async () => {
      try {
        const response = await axios.get(
          "https://resume.redberryinternship.ge/api/degrees"
        );
        setDegree(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDegree();
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
              imageDataUri={imageDataUri}
              setImageDataUri={setImageDataUri}
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
              imageDataUri={imageDataUri}
              setImageDataUri={setImageDataUri}
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
              imageDataUri={imageDataUri}
              setImageDataUri={setImageDataUri}
              setResume={setResume}
              degree={degree}
            />
          }
        />
        <Route
          path="/resume"
          element={
            <Resume
              setData={setData}
              setEducationData={setEducationData}
              setExperienceData={setExperienceData}
              setImageDataUri={setImageDataUri}
              resume={resume}
              imageDataUri={imageDataUri}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
