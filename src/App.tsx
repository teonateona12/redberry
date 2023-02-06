import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/Experience";
import Home from "./pages/home/Home";
import Personal from "./pages/personal/Personal";
import Resume from "./pages/resume/Resume";
import { PersonalInformation } from "./types";

function App() {
  const [data, setData] = useState<PersonalInformation>({
    firstName: "",
    lastName: "",
    about: "",
    email: "",
    number: "",
    image: null,
  });
  console.log(data);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/personal"
          element={<Personal setData={setData} data={data} />}
        />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
