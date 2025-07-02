'use client'

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"



const Hero = () => {
    const ArrowRightMotion = motion(ArrowRight);

  
  return (
   <section 
    className="bg-[url('/earth-seen.png')] bg-cover bg-center  min-h-screen flex items-center justify-center"
   >
     <div className="text-center px-4">
        <h1 className=" text-2xl md:text-[64px] max-w-3xl  flex flex-col items-center  justify-start mx-auto font-bold mb-4">
            Mixed Techniques for Modeling Airport 
            <span className="block text-primary">

            Navigation System
            <Image alt="title image" className="text-primary" src={'/under-line-hero-title.svg'} height={650} width={650} />
            
            </span>
        </h1>
        <p className="text-sm sm:text-lg mb-6 max-w-3xl text-muted-foreground mx-auto">
         The development of virtual ATC towers marks a significant step in digitizing airport operations by reducing costs and improving efficiency. These towers utilize AI to monitor ground aircraft, prevent collisions, and enhance situational awareness. As air traffic becomes more complex, integrating AI and human-centered systems into ATM is vital for ensuring a safer and more efficient future in aviation.
        </p>
       <Button className={cn(`px-16`)} 
       asChild>
        <Link href={'/dashboard'}>
        
        Go to Dashboard
        <ArrowRightMotion 
        animate={{ x: [0, 4, 0] }}
      transition={{
        duration: .8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
        
        />
        </Link>
       </Button>
      </div>
   </section>
  )
}

export default Hero