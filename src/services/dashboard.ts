import { WeatherData } from "@/lib/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function fetchWeather(city?:string ):Promise<WeatherData | null>  {
    const finalCity = city?.trim() || 'cairo'
    try{
    const res =await fetch(`${API_URL}/all-pred/api/forecast?city=${finalCity}`);

    if(!res.ok){
        throw new Error(`Faild to fetch weather data for ${finalCity}`);

    }
    const data:WeatherData = await res.json();
    return data;
}catch(error){
     console.error("Weather fetch error:", error);
    return null;

}

    
}

