import React from 'react'

interface CustomTitleProps  {
    title:string,
    desc:string
}
const CustomTitle = ({title, desc}:CustomTitleProps) => {
  return (
   <div className="max-w-xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>

        </div>
  )
}

export default CustomTitle