'use client'
import Footer from "@/components/custom/large/Footer";
import Forecast from "./Forecast";

import Map from "./Map";
import WeatherCard from "./WeatherCard";
import { Card } from "@/components/ui/card";

import Logo from "@/components/custom/atoms/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LocateFixed, MapPin, Search } from "lucide-react";
import { fetchMap, fetchWeather } from "@/services/dashboard";
import { useEffect, useState } from "react";
import {WeatherData} from '@/lib/types'
import Loading from "./loading";

type DashboardData ={
  weather:WeatherData |null,
  map:string | null |undefined
} 
const Dashboard = () => {
  const [data, setData] = useState<DashboardData>()
  

  useEffect(()=>{
    const loadWeather = async()=>{
      try{
     
        const data = await fetchWeather()
        const map = await fetchMap();
        setData({map:map,weather:data})
      } catch(error){
        console.error('faild to fetch weather and map:', error)
      } 
    }
    loadWeather();
  },[])

  const hanldeSearch=async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
  const cityInput = form.elements.namedItem('city') as HTMLInputElement;
  const city = cityInput.value.trim();
 
  const data = await fetchWeather(city)
  console.log(data)
  const map = await fetchMap(city);
  setData({weather:data, map:map})

  }

  if(!data ) return <Loading />
  return (
    <>
      <section>
        <header className=" flex justify-between items-center px-4 w-11/12 max-w-7xl mx-auto">
          <div className="flex-1">
            <Logo />
          </div>
          <div className="flex-1 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <MapPin />
              <span className="text-xl">{data?.weather?.city}Cairo, Egypt {data?.weather?.country}</span>
            </div>
            <form onSubmit={hanldeSearch} className=" flex items-center relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
              name="city"
                type="search"
                placeholder="Search City"
                className=" w-full pl-10 pr-4 rounded-tr-none rounded-br-none"
              />
              <Button
              type="submit"
                size={"icon"}
                className="py-3 rounded-tl-none rounded-bl-none"
              >
                <LocateFixed />
              </Button>
            </form>
          </div>
        </header>

        <div className=" max-w-6xl w-11/12 mx-auto px-8">
          <div className="flex items-center gap-16 justify-between mt-8">
            <WeatherCard />
            <Map map={data?.map ?? null} lat={data?.weather?.latitude ?? null} long={data?.weather?.longitude ?? null} />
          </div>
          <Forecast />
        </div>

      </section>
      
    </>
  );
};

export default Dashboard;
