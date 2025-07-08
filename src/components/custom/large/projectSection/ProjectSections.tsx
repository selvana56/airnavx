import React from 'react'
import CustomTitle from '../../atoms/CustomTitle'
import ProjectCard from './ProjectCard'
const title = "Project Sections"
const desc = `The project is divided into three main sections: artificial intelligence, mixed reality, 
and their application in the navigation system.`


const projectSectionsData=[
  {image:'/project-sections/ai.png',desc:' An AI-powered weather system delivers accurate 24-hour forecasts, helping pilots and controllers make better decisions in changing conditions. A YOLO-based model enables real-time detection of aircraft and obstacles on runways, improving situational awareness and reducing human error. AI also supports early prediction of adverse weather from in-flight aerial images, boosting landing safety.'},
  {image:'/project-sections/mixed-reality.png',desc:'Mixed Reality (MR) blends digital content with the real world, allowing users to interact with both physical and virtual elements in real time. Unlike VR or AR, MR enables seamless integration and interaction between both environments. It enhances training, decision-making, and collaboration by overlaying real-time data directly into the user\'s view. In air traffic control, MR improves safety and efficiency by visualizing aircraft positions, weather, and runway status within the controller’s field of vision. '},
  {image:'/project-sections/ai-mixed.png',desc:'AI and Mixed Reality work together to enhance navigation by combining real-time data analysis with immersive visual overlays. AI detects weather, obstacles, and aircraft movement, while MR displays this information directly in the user’s view. This integration improves situational awareness, speeds up decisions, and supports safer, smarter navigation.'},
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