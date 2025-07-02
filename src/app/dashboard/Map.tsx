import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Map = () => {
  return (
    <div className=''>
        <Image src={'/map.png'} width={280} height={300} alt='map'/>
        <Button className='w-full text-lg '>30.0444, 31.2357</Button>
    </div>
  )
}

export default Map