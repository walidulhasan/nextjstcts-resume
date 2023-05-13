"ui client";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import RobinTexGroupBD from "./works/RobinTexGroupBD";
import Fiverr from "./works/Fiverr";
import AgraniBankLtd from "./works/AgraniBankLtd";
import YouTube from "./works/YouTube";

const Experience = () => {
  const [workRogintexGroup, setWorkRogintexGroup] = useState(true);
  const [workFiverr, setWorkFiverr] = useState(false);
  const [workAgraniBank, setworkAgraniBank] = useState(false);
  const [workYouTbue, setworkYouTbue] = useState(false);

  const handlerRobintexGroup = () => {
    setWorkRogintexGroup(true);
    setWorkFiverr(false);
    setworkAgraniBank(false);
    setworkYouTbue(false)
  };
  const handlerFiverr = () => {
    setWorkRogintexGroup(false);
    setWorkFiverr(true);
    setworkAgraniBank(false);
    setworkYouTbue(false)
  };
  const handlerAgraniBank = () => {
    setWorkRogintexGroup(false);
    setWorkFiverr(false);
    setworkAgraniBank(true);
    setworkYouTbue(false)
  };
  const handlerYouTube = () => {
    setWorkRogintexGroup(false);
    setWorkFiverr(false);
    setworkAgraniBank(false);
    setworkYouTbue(true)
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <div>
        <ul className="md:w-52  flex flex-col">
          <li
            onClick={handlerRobintexGroup}
            className={`${
              workRogintexGroup
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            }  border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            RobinTex Group
          </li>
          <li
            onClick={handlerFiverr}
            className={`${
                workFiverr
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              }  border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Fiverr
          </li>
          <li
            onClick={handlerAgraniBank}
            className={`${
                workAgraniBank
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              }  border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Agrani Bank Ltd
          </li>
          <li
            onClick={handlerYouTube}
            className={`${
                workYouTbue
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              }  border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            YouTube
          </li>
        </ul>
        </div>
        {workRogintexGroup && <RobinTexGroupBD />}
        {workFiverr && <Fiverr />}
        {workAgraniBank && <AgraniBankLtd />}
        {workYouTbue && <YouTube />}
      </div>
    </section>
  );
};

export default Experience;
