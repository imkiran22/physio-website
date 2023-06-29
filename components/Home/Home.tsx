import React from "react";
import { DOCTOR_INTRO, SLOGAN } from "../../constants/meta";
import HomeStyle from "./Home.module.scss";

const homeImagePath = "/physio.jpg";

const HomeComponent: React.FC = () => {
  return (
    <div className={`text-3xl font-bold ${HomeStyle.container}`}>
      <div className={`${HomeStyle.home}`}>
        <img src={homeImagePath} className={"w-full bg-cover"} />
        <div
          className={`text-layer flex flex-col ${HomeStyle.bookNow} xs:items-right md:items-left md:text-4xl xs:text-xs xs:max-w-32 md:max-w-md xs:leading-10 md:leading-10`}
        >
          <span className="text-black-800">{SLOGAN}</span>
          <button className="rounded-sm bg-indigo-500 p-1 md:w-72 xs:w-full">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
