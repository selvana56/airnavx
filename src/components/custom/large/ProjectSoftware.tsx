"use client";


import CustomTitle from "../atoms/CustomTitle";
import Image from "next/image";

const TITLE = "Project Softwares";
const DESC = ` The project is divided into three main sections: artificial intelligence, mixed reality, 
and their application in the navigation system.`;
const cards = [
  "/colab.jpg",
  "/unity.jpg",
  "/blender.png",
  "/figma.png",
  "/next.svg",
  
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
