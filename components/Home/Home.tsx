import React from "react";
import { DOCTOR_INTRO } from "../../constants/meta";
import HomeStyle from "./Home.module.scss";

const homeImagePath = "/physio-cover.jpg";

const HomeComponent: React.FC = () => {
  return (
    <div className={`text-3xl font-bold ${HomeStyle.container}`}>
      <div className={`${HomeStyle.home}`}>
        <img src={homeImagePath} className={"w-full bg-cover"} />
        <div className={`text-layer flex flex-col ${HomeStyle.bookNow}`}>
          <span className="text-sky-800">The Caring Hands you deserve</span>
          <button>Book now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
