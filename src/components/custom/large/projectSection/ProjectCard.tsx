import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'


interface ProjectCardProps {
    projectData :{image:string, desc:string}
} 
const ProjectCard = ({projectData}:ProjectCardProps) => {
  return (
   <Card className='w-full sm:max-w-3/12  p-0 '>
    <Image alt='project image' className='p-0' src={projectData.image} width={500} height={500} />
    <p className='pb-5 px-2.5 text-sm sm:text-[16px] font-semibold'>{projectData.desc}</p>
   </Card>
  )
}

export default ProjectCard