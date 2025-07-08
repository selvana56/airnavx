import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { CloudFog } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Data = [
    {time:19.23, temp:33.2, humidity:48, wind:36.5, rain:'NO'},
    {time:19.23, temp:33.2, humidity:48, wind:36.5, rain:'NO'},
    {time:19.23, temp:33.2, humidity:48, wind:36.5, rain:'NO'},
    {time:19.23, temp:33.2, humidity:48, wind:36.5, rain:'NO'},
    {time:19.23, temp:33.2, humidity:48, wind:36.5, rain:'NO'},
    {time:19.23, temp:33.2, humidity:48, wind:36.5, rain:'NO'},
]
const Forecast = () => {
  return (
    <section className='mt-20 mb-16 w-full'>
        <Button className='font-bold capitalize text-2xl py-6 mb-5'>Hourly Weather Forecast</Button>

        {Data.map((item, index)=>
        
        <>
        <div key={index} className='flex items-center justify-between py-5'>
             <TolTip content='Time'>

            <span>19:23</span>
             </TolTip>
            
            <TolTip content='Temperature'>

            <span>33.2&deg;C</span>
            </TolTip>
            
            <TolTip content='Humidity'>
                
                
            <span className='flex items-center gap-1'>
                <Image src={'/humidity.svg'} alt='humidity' width={14} height={14}/>
                <span>

                48
                <span>%</span>
                </span>
            </span>
            </TolTip>
            <TolTip content='Wind status'>

            <span className='flex items-center gap-1'>
              <CloudFog className='text-primary' size={20}/>
                36.5<sub>km/h</sub>
            </span>
            </TolTip>
            <TolTip content='Direction'>

            <Button className='font-semibold'>
              N
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
