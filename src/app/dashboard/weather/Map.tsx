import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

interface MapProps {
  map:string |null,
  lat:number | null,
  long:number | null
}

const Map = ({map,lat,long}:MapProps) => {
  return (
    <div >
       {map&&  <div 
       className='block h-full w-full rounded-2xl'
       dangerouslySetInnerHTML={{__html: map}} />}
  
        <Button className='w-full text-lg '>{lat}33.323, {long}29.345</Button>
    </div>
  )
}

export default Map