'use client'

import UploadInput from '@/components/custom/atoms/UploadInput'
import { Button, buttonVariants } from '@/components/ui/button'
import { WeatherPrediction } from '@/lib/types'
import { weatherRecognition } from '@/services/weatherRecognition'
import { useMutation } from '@tanstack/react-query'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const WeatherRecognition = () => {
   const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string>('')
  const [pred, setPred]  = useState<WeatherPrediction>();
  const [loading, setLoading] =useState(false)

   const uploadImage = useMutation({
    mutationFn:weatherRecognition,
   
  })

  const handleFileChange = async(file: File) => {
    setFile(file)
    setPreviewUrl(URL.createObjectURL(file))
    setLoading(true)
    const data = await uploadImage.mutateAsync(file)
    if(data){
      setPred(data)
     
      setLoading(false)
    }
  }

  return (
   <section className='w-11/12 max-w-6xl mx-auto c-flex flex-col gap-8'>
    <div className='w-full text-start'>
        <h2 className='text-4xl font-bold mb-2'>Upload Photos</h2>
        <p className='text-lg text-muted-foreground'>Upload a weather-related photo to see how our AI recognizes weather patterns from images.</p>
    </div>
    <UploadInput
    uploadFile={handleFileChange}
    title='Drop your image here, or'
    desc='Support PNG, JPG, JPEG, SVG up to 224 MB.'
    loading={loading}
    >
      {previewUrl && <div className='w-full  c-flex flex-col gap-8'>
        <Image src={previewUrl} alt='weather' 
        width={500} height={400}
        />
        <h3 className='text-3xl font-bold uppercase'>{pred?.prediction}</h3>
        <p
        className={`${buttonVariants()} px-5`}
        >Try more <ArrowRight /> </p>
      </div>
    }
      </UploadInput>


   </section>
  )
}

export default WeatherRecognition