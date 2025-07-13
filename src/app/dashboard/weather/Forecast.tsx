import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Forecast } from '@/lib/types'
import { CloudFog } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type ForCastProps = {
   data:Forecast []
    
}
const Forecast = ({data}:ForCastProps) => {
  return (
    <section className='mt-20 mb-16 w-full'>
        <Button className='font-bold capitalize text-2xl py-6 mb-5'>Hourly Weather Forecast</Button>

        {data?.map((item, index)=>
        
        <>
        <div key={index} className='flex items-center justify-between py-5'>
             <TolTip content='Time'>

            <span>{item.time}</span>
             </TolTip>
            
            <TolTip content='Temperature'>

            <span>{item.temp}&deg;C</span>
            </TolTip>
            
            <TolTip content='Humidity'>
                
                
            <span className='flex items-center gap-1'>
                <Image src={'/humidity.svg'} alt='humidity' width={14} height={14}/>
                <span>

                {item.humidity}
                <span>%</span>
                </span>
            </span>
            </TolTip>
            <TolTip content='Rain status'>

            <span className='flex items-center gap-1'>
              <CloudFog className='text-primary' size={20}/>
                {item.rain_probability}<sub>km/h</sub>
            </span>
            </TolTip>
            <TolTip content='Direction'>

            <Button className='font-semibold'>
            {item.wind_direction}
            </Button>
              
            </TolTip>
            <TolTip content='Rain'>

            <span className='flex items-center gap-1 mr-10'>
                <Image src={'/rain-drobs.svg'} alt='humidity' width={14} height={14}/>
                NO
            </span>
            </TolTip>
        </div>
        <Separator />
        </>
        )}
    </section>
  )
}

export default Forecast


interface TolTipProps {
    children:React.ReactNode,
    content:string
}

const TolTip = ({children, content}:TolTipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent>
        {content}
      </TooltipContent>
    </Tooltip>
  )
}
