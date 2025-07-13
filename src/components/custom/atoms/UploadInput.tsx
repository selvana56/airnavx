import { weatherRecognition } from '@/services/weatherRecognition'
import { useMutation } from '@tanstack/react-query'
import { CloudUpload, Loader2 } from 'lucide-react'
import React from 'react'

interface UploadInputProps {
    children?:React.ReactNode,
    title:string,
    desc:string,
    loading:boolean,
    uploadFile?:(file:File)=>void
}
const UploadInput = ({title,desc,loading,children,uploadFile}:UploadInputProps) => {

 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && uploadFile) {
      uploadFile(file)
    }
  }
  return (
    <form
    className='w-3xl shadow-sm mb-10 p-5 min-h-[500px] bg-sidebar-accent border-[2.5px] border-  border-[#9E9E9E] rounded-lg border-dashed'>
        <input 
        onChange={handleChange}
        accept='image/*,video/*'
        className='hidden' disabled={loading}  name='fileInput' id='file-input' type='file' />
        <label htmlFor='file-input'>
            
            <div className='w-ful h-full flex flex-col items-center justify-center'>
              {children ?children:  
            <div className='flex flex-col items-center justify-center gap-5'>
                {loading? <Loader2 className='animate-spin size-14 text-primary' />: <CloudUpload className='size-24 text-primary'/>}
                <h4 className='text-4xl font-medium'>{title} <span className='text-primary'>Browse </span></h4>
                <span className='text-lg font-normal text-muted-foreground'>{desc}</span>
                </div>
        }
            </div>

        </label>
    </form>
  )
}

export default UploadInput