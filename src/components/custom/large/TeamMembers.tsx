'use client'

import React from 'react'
import { motion } from "motion/react";

import Image from "next/image";

const teamMembersCards = [
  {name:'islam Mohammed', job:'Front-End devloper', img:'/team-members/islam.jpeg' },
  {name:'islam Mohammed', job:'Front-End devloper', img:'/team-members/islam.jpeg' },
  {name:'islam Mohammed', job:'Front-End devloper', img:'/team-members/islam.jpeg' },
  {name:'islam Mohammed', job:'Front-End devloper', img:'/team-members/islam.jpeg' },
  {name:'islam Mohammed', job:'Front-End devloper', img:'/team-members/islam.jpeg' },
  {name:'islam Mohammed', job:'Front-End devloper', img:'/team-members/islam.jpeg' },
  {name:'islam Mohammed', job:'Front-End devloper', img:'/team-members/islam.jpeg' },
  {name:'islam Mohammed', job:'Front-End devloper', img:'/team-members/islam.jpeg' },
  {name:'islam Mohammed', job:'Front-End devloper', img:'/team-members/islam.jpeg' },
  {name:'islam Mohammed', job:'Front-End devloper', img:'/team-members/islam.jpeg' },
  {name:'islam Mohammed', job:'Front-End devloper', img:'/team-members/islam.jpeg' },
  {name:'islam Mohammed', job:'Front-End devloper', img:'/team-members/islam.jpeg' },
];
const TeamMembers = () => {
  return (
    <section id='team-members' className='sm:py-16'>
        <div className='sm:w-11/12  mx-auto'>
        <h3 className='text-xl sm:text-4xl font-bold max-w-xl mx-auto text-center mb-10'>Team Members</h3>
        <div className="overflow-x-auto scroll-smooth whitespace-nowrap sm:px-4 pb-8 sm:py-8">
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-6 w-max"
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
