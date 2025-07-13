'use client'
import UploadInput from '@/components/custom/atoms/UploadInput'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { imageRealTime, videoRealTime } from '@/services/realTime'
import { useMutation } from '@tanstack/react-query'
import { ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


const RealTime = () => {
 const [resultImage, setResultImage] = useState<string | null>(null)
 const [resultVideo, setResultVideo] = useState<string |null>(null)
 const [loading, setLoading] = useState(false)

   const postImage = useMutation({
    mutationFn:imageRealTime
   })

   const postVideo =useMutation({
    mutationFn:videoRealTime
   })
  

   useEffect(() => {
  return () => {
    if (resultVideo) URL.revokeObjectURL(resultVideo);
    if (resultImage) URL.revokeObjectURL(resultImage);
  };
 
}, [resultVideo, resultImage]);
  const handleFileChange = async(file: File) => {
    setLoading(true)
    if(file.type.includes('video/')){
      setResultImage(null)
      const blob= await postVideo.mutateAsync(file)
      if(blob){
        const videoUrl = URL.createObjectURL(blob)
        setResultVideo(videoUrl)

      }
      setLoading(false)
    } else {
      setResultVideo(null)
      const blob= await postImage.mutateAsync(file)
       if (blob) {
        setLoading(false)
    const imageUrl = URL.createObjectURL(blob); 
    setResultImage(imageUrl);
  }
    }
    
  
  }


  
  return (
    <section className='w-11/12 max-w-6xl mx-auto c-flex flex-col gap-8'>
    <div className='w-full text-start'>
        <h2 className='text-4xl font-bold mb-2'>Upload file</h2>
        <p className='text-lg text-muted-foreground'>Upload an image or video for the AI to detect objects.</p>

    </div>
    <UploadInput
    uploadFile={handleFileChange}
    title='Drop your image or video here, or'
    desc='Support PNG, JPG, and JPEG or MP4 up to 224 MB.'
    loading={loading}
    >
      {resultImage ?
      <>
      
   

      <div className='c-flex gap-4 flex-col'>

      <div className='flex items-center gap-8'>
       
        <div className='text-center'>
            <h4 className='mb-4 font-bold text-4xl'>Result</h4>
          <Image src={resultImage} alt='result' width={600} height={1000} className='object-cover rounded-lg w-[600px] ' />
        </div>
      </div>
      
    <a href={resultImage} download="result.png">

       <Button type='button' size={'icon'} className={cn(`px-30`)}>Download <Download/></Button>
    </a>
       <p     className={cn( `${buttonVariants({variant:'outline', size:'icon'})} text-primary font-medium px-30`)}>Try more <ArrowRight/></p>

      </div> 
      </>: resultVideo?
   
 
 
<div className='c-flex flex-col gap-4'>
      
        <h2
        className='text-2xl font-bold'
        >Object detection was successfully performed on the video file</h2>
      <video controls={true} src={resultVideo}
      className='w-xl  rounded-lg'
      />
        <a href={resultVideo} download="result.mp4">

       <Button type='button' size={'icon'} className={cn(`px-30`)}>Download <Download/></Button>
    </a>
       <p     className={cn( `${buttonVariants({variant:'outline', size:'icon'})} text-primary font-medium px-30`)}>Try more <ArrowRight/></p>

      </div>:null
    }

      

    </UploadInput>
    </section>
  )
}

export default RealTime