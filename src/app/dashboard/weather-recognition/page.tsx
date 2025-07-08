import UploadInput from '@/components/custom/atoms/UploadInput'
import UploadProgressCard from '@/components/custom/atoms/UploadProgressCard'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const WeatherRecognition = () => {
  const imageUrl =''
  return (
   <section className='w-11/12 max-w-6xl mx-auto c-flex flex-col gap-8'>
    <div className='w-full text-start'>
        <h2 className='text-4xl font-bold mb-2'>Upload Photos</h2>
        <p className='text-lg text-muted-foreground'>Upload a weather-related photo to see how our AI recognizes weather patterns from images.</p>
    </div>
    <UploadInput title='Drop your image here, or'
    desc='Support PNG, JPG, JPEG, SVG up to 224 MB.'
    loading={false}
    >
      {imageUrl && <div className='w-full h-full c-flex flex-col gap-8'>
        <Image src={'/snowy.png'} alt='weather' 
        width={700} height={300}
        />
        <h3 className='text-3xl font-bold uppercase'>SNOWY</h3>
        <Button type='button'>Try more <ArrowRight /> </Button>
      </div>
    }
      </UploadInput>


   </section>
  )
}

export default WeatherRecognition