import React from "react";
import { DOCTOR_INTRO } from "../../constants/meta";

const imagePath = "/dr_kannan.jpeg";
const AboutComponent: React.FC = () => {
  return (
    <div className="text-md p-3 text-indigo-900 rounded-sm drop-shadow-xl flex flex-col">
      <div className="profile-card image-container drop-shadow-sm shadow-lg shadow-gray-100 pb-4 inline-flex">
        <img
          src={imagePath}
          className="h-60 w-72 md:scale-100 xs:scale-75 pr-2 rounded-full"
        />
        <div className="profile-details">
          <span>Fill your profile details here...</span>
        </div>
      </div>
      <p className="whitespace-pre-line text-start tracking-wide md:leading-8 xs:leading-5">
        <span className="flex font-black underline decoration-2">
          Hi I am Dr S Kannan
        </span>
        <span className="">{DOCTOR_INTRO}</span>
      </p>
    </div>
  );
};

export default AboutComponent;

//border-gray-200 border
