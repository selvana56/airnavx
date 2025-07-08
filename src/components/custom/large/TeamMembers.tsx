'use client'

import React from 'react'
import { motion } from "motion/react";

import Image from "next/image";

const teamMembersCards = [
  {name:'Hosny Abdallah', job:'AI Engineer', img:'/team-members/hosny.png' },
  {name:'Joy Ishak', job:'AI Engineer', img:'/team-members/joy.png' },
  {name:'Israa Mostafa', job:'AI Engineer', img:'/team-members/other.png' },
  {name:'3D developer', job:'Front-End devloper', img:'/team-members/islam.png' },
  {name:'Nada Saeed', job:'UI/UX designer ', img:'/team-members/nade.png' },
  {name:'Hazem hamdi', job:'Backend Developer', img:'/team-members/hazem.png' },
  {name:'Mostafa sameh', job:'3D Artist', img:'/team-members/most.png' },
  {name:'Rahma Hossam', job:'3D Artist', img:'/team-members/other.png' },
  {name:'Rawan', job:'Unity Scripter', img:'/team-members/rawan.png' },
  {name:'Selvana Sameh', job:'3D developer', img:'/team-members/selvana.png' },
  {name:'Abd Elrahman Abozaid', job:'3D Artist', img:'/team-members/abdo.png' },
  {name:'Ahmed abd Elsttar', job:'Copyright', img:'/team-members/ahmed.png' },
];
const TeamMembers = () => {
  return (
    <section id='team-members' className='sm:py-16 z-0'>
        <div className='sm:w-11/12  mx-auto'>
        <h3 className='text-xl sm:text-4xl font-bold max-w-xl mx-auto text-center mb-10'>Team Members</h3>
        <div className="overflow-x-auto scroll-smooth whitespace-nowrap sm:px-4 pb-8 sm:py-8">
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-6 w-max z-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[ ...teamMembersCards].map((item, index) => (
              <TeamMembersCard name={item.name} job={item.job} img={item.img} key={index}/>
            ))}
          </motion.div>
        </div>
      </div>
        </div>
    </section>
  )
}

export default TeamMembers



interface TeamMembersProps {
  name:string, 
  job:string,
  img:string
}
const TeamMembersCard = ({name, img,job}:TeamMembersProps) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <Image
                src={img}
                
                alt={name}
                width={200}
                height={200}
                className='rounded-full'
              />
              <h3 className='font-semibold text-lg sm:text-2xl'>{name}</h3>
              <p className='font-semibold text-sm sm:text-xl'>{job}</p>
    </div>
  )
}
