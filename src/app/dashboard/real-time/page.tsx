import UploadInput from '@/components/custom/atoms/UploadInput'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type imageOrVideo = 'image'| 'video';
const RealTime = () => {
  const data =''
  const imageOrVideo: imageOrVideo ='video';
  return (
    <section className='w-11/12 max-w-6xl mx-auto c-flex flex-col gap-8'>
    <div className='w-full text-start'>
        <h2 className='text-4xl font-bold mb-2'>Upload file</h2>
        <p className='text-lg text-muted-foreground'>Upload an image or video for the AI to detect objects.</p>

    </div>
    <UploadInput title='Drop your image or video here, or'
    desc='Support PNG, JPG, and JPEG or MP4 up to 224 MB.'
    loading={false}
    >
      {data &&
      <>
      {imageOrVideo === 'image'? 
        <div className='c-flex gap-4 flex-col'>


      <div className='flex items-center gap-8'>
        <div className='text-center'>
          <h4 className='mb-4 font-bold text-4xl'>Original</h4>
          <Image src={'/snowy.png'} alt='original' width={250} height={250} className='object-cover rounded-lg w-[250px] h-[250px]' />
        </div>
        <div className='text-center'>
            <h4 className='mb-4 font-bold text-4xl'>Result</h4>
          <Image src={'/snowy.png'} alt='original' width={250} height={250} className='object-cover rounded-lg w-[250px] h-[250px]' />
        </div>
      </div>
       <Button type='button' size={'icon'} className={cn(`px-30`)}>Download <Download/></Button>
       <Button type='button' size={'icon'}  variant={'outline'} className={cn('text-primary font-medium px-30')}>Try more <ArrowRight/></Button>

      </div> 

:<div className='c-flex flex-col gap-4'>
      
        <h2
        className='text-2xl font-bold'
        >Object detection was successfully performed on the video file</h2>
      <video controls={true} src={''}
      className='w-xl h-[300px] rounded-lg'
      />
      <Button type='button' size={'icon'} className={cn(`px-30`)}>Download <Download/></Button>
       <Button type='button' size={'icon'}  variant={'outline'} className={cn('text-primary font-medium px-30')}>Try more <ArrowRight/></Button>
     
      </div>
    }
      </>
}
    </UploadInput>
    </section>
  )
}

export default RealTime