
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function imageRealTime(file:File ):Promise< Blob| null>  {
    const formData = new FormData();
  formData.append('file', file); 
    try{
    const res =await fetch(`${API_URL}/video-detection/detect/image`,{
      method: 'POST',
      body: formData,
    });
    if(!res.ok){
        throw new Error(`somthing wrong`);

    }
    const data = await res.blob();
    console.log(data)
    return data;
}catch(error){
     console.error("image recoginse fetch error:", error);
    return null;

}

    
}
export async function videoRealTime(file:File ):Promise<Blob | MediaSource | null>  {
    const formData = new FormData();
  formData.append('file', file); 
    try{
    const res =await fetch(`${API_URL}/video-detection/detect/video`,{
      method: 'POST',
      body: formData,
    });
    if(!res.ok){
        throw new Error(`somthing wrong`);

    }
    const data = await res.blob();
    console.log(data)
    return data;
}catch(error){
     console.error("image recoginse fetch error:", error);
    return null;

}

    
}