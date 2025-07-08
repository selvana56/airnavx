import Image from 'next/image'
import React from 'react'

const title = 'How to design your site footer like we did'
const desc =`The development of virtual Air Traffic Control (ATC) towers represents a major advancement in digitizing airport operations, aiming to cut costs and boost efficiency. These towers use artificial intelligence (AI) to monitor aircraft on the ground, issue collision warnings, and enhance situational awareness. With rising challenges in air traffic due to increased congestion and diversity of aircraft, integrating AI and human-centric systems into ATM (Air Traffic Management) is essential for building a safer, more efficient, and future-ready aviation infrastructure.`

const VideoTrial = () => {
  return (
    <section className= 'py-10 md:py-20'>
        <div className='w-11/12 max-w-6xl mx-auto flex items-center flex-wrap justify-between gap-10'>
        {/* <video src={'/pilot.png'}/> */}
        <video controls={true} src={'/youtub.png'}  width={600} height={700} />
        <div className='flex-1'>
            <h3 className='text-xl sm:text-4xl font-bold pb-5'>{title}</h3>
            <p className='text-sm sm:text-lg text-muted-foreground'>{desc}</p>
        </div>

        </div>
    </section>
  )
}

export default VideoTrial