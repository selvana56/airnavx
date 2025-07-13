import { WeatherPrediction } from "@/lib/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function weatherRecognition(file:File ):Promise<WeatherPrediction | null>  {
    const formData = new FormData();
  formData.append('file', file); 
    try{
    const res =await fetch(`${API_URL}/weather3/predict`,{
      method: 'POST',
      body: formData,
    });
    if(!res.ok){
        throw new Error(`somthing wrong`);

    }
    const data = await res.json();
    return data;
}catch(error){
     console.error("Weather recoginse fetch error:", error);
    return null;

}

    
}