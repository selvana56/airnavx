"use client";


import CustomTitle from "../atoms/CustomTitle";
import Image from "next/image";

const TITLE = "Project Softwares";
const DESC = `We have utilized these fundamental software tools, along with several others.`;
const cards = [
  "/project-software/colab.jpg",
  "/project-software/unity.jpg",
  "/project-software/blender.png",
  "/project-software/figma.png",
  "/project-software/next.svg",
  "/project-software/react.svg",
  
];
const ProjectSoftware = () => {
  return (
    <section id="about-project" className="w-11/12 max-w-6xl mx-auto py-16 ">
      <CustomTitle title={TITLE} desc={DESC} />
      <div className="flex items-center justify-center gap-12 overflow-x-auto scroll-smooth py-12">
        {cards.map((link)=>
        <Image
                        src={link}
                        key={link}
                        alt="software image"
                        width={120}
                        height={150}
                      />
        )}
      </div>
    </section>
  );
};

export default ProjectSoftware;
