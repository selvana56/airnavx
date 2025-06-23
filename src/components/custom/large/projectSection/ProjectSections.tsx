import React from 'react'
import CustomTitle from '../../atoms/CustomTitle'
import ProjectCard from './ProjectCard'
const title = "Project Sections"
const desc = `The project is divided into three main sections: artificial intelligence, mixed reality, 
and their application in the navigation system.`


const projectSectionsData=[
  {image:'/pilot.png',desc:'Navigation within modern ATM systems is increasingly dependent on AI-enhanced tools that support real-time situational awareness. These systems abstract complex airspace data and present it in a user-friendly way to controllers, improving decision-making and reducing the chances of human error. This integration ensures smoother traffic flow, fewer delays, and enhanced safety across increasingly crowded skies.'},
  {image:'/pilot.png',desc:'Navigation within modern ATM systems is increasingly dependent on AI-enhanced tools that support real-time situational awareness. These systems abstract complex airspace data and present it in a user-friendly way to controllers, improving decision-making and reducing the chances of human error. This integration ensures smoother traffic flow, fewer delays, and enhanced safety across increasingly crowded skies.'},
  {image:'/pilot.png',desc:'Navigation within modern ATM systems is increasingly dependent on AI-enhanced tools that support real-time situational awareness. These systems abstract complex airspace data and present it in a user-friendly way to controllers, improving decision-making and reducing the chances of human error. This integration ensures smoother traffic flow, fewer delays, and enhanced safety across increasingly crowded skies.'},
]
const ProjectSections = () => {
  return (
    <section className='bg-[#6C4DFC]/10 py-12'>
        <CustomTitle title={title} desc={desc}/>
        <div className='w-full px-0.5 py-8 max-w-6xl mx-auto flex items-center justify-evenly gap-5 flex-wrap'>
        {projectSectionsData.map((item, index)=><ProjectCard key={index} projectData={item}/>)}
        </div>

    </section>
  )
}

export default ProjectSections