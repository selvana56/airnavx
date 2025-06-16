'use client'

import { motion } from "motion/react"
import CustomTitle from "../atoms/CustomTitle"
import Image from "next/image"

const TITLE = 'Project Softwares'
const DESC = ` The project is divided into three main sections: artificial intelligence, mixed reality, 
and their application in the navigation system.`
const cards = [
    "/colab.jpg",
    "/unity.jpg",
    "/colab.jpg",
    "/unity.jpg",
    "/colab.jpg",
    "/unity.jpg",
    "/colab.jpg",
    "/unity.jpg",
    

];
const ProjectSoftware = () => {
  return (
    <section className="w-11/12 max-w-6xl mx-auto py-8 ">
        <CustomTitle title={TITLE} desc={DESC}/>
        <div className="overflow-x-auto scroll-smooth whitespace-nowrap px-4  py-8">
            
        
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...cards, ...cards].map((item, index) => (

            <Image src={item} key={index} alt='software image' width={120} height={150}/>
))}
      </motion.div>
      </div>

        </div>

    </section>
  )
}

export default ProjectSoftware