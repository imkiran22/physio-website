import React from "react";
import { DOCTOR_INTRO } from "../../constants/meta";

const imagePath = "/dr_kannan.jpeg";
const AboutComponent: React.FC = () => {
  return (
    <div className="text-md p-3 text-gray-800 border-gray-200 border rounded-sm drop-shadow-xl">
      <div className="image-container sepia float-left drop-shadow-sm shadow-lg shadow-gray-100">
        <img src={imagePath} className="h-60 w-fit md:scale-100 xs:scale-75" />
      </div>
      <p className="break-all whitespace-pre-line text-start tracking-wide md:leading-8 xs:leading-5">
        {DOCTOR_INTRO}
      </p>
    </div>
  );
};

export default AboutComponent;
