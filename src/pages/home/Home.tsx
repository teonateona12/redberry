import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="bg-[url('./assets/images/home.png')] 
     h-[100vh] bg-no-repeat bg-cover	"
    >
      <div className="pt-6 px-16">
        <img src={logo} />
        <div className="border-[#1A1A1A] border-2	mt-4"></div>
      </div>
      <div className="bg-[url('./assets/images/logo2.png')] bg-center	 bg-no-repeat flex justify-center h-full">
        <div className="my-auto">
          <Link to="/personal">
            <button className="bg-[#1A1A1A] font-['Helvetica-Neue'] py-4 px-16 text-white rounded-lg -ml-[17%]	">
              ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
