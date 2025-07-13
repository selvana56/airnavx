import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

import { CloudFog } from "lucide-react";

type WeatherCardProps = {
  current_temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  wind_speed: number;
  wind_direction: string;
  rain_prediction: string;
   pressure: number;
}
const WeatherCard = ({current_temp, feels_like, humidity, temp_max,temp_min,
  wind_direction, wind_speed,
  rain_prediction,
  pressure
}:WeatherCardProps) => {
  return (
    <section className="grid grid-cols-3 grid-rows-[200px_150px] w-6/12 h-[350px] gap-2">
      <Card
        className="col-start-1 col-end-3 p-4
  bg-[linear-gradient(1deg,_rgba(98,152,213,1)_0%_30%,_rgba(165,130,244,1)_100%)]
  text-white
  
  "
      >
        <h4>Current Weather</h4>

        <div className="flex items-center justify-between gap-4">
          <div className="flex">
            <Image src={"/weather.svg"} alt="weather" width={62} height={62} />
            <div className="flex flex-col justify-center">
              <span className="text-2xl">{current_temp} &deg;C</span>
              <span className="text-xs text-black">{feels_like}&deg;C</span>
            </div>
          </div>
          <div>
            <span>{temp_max}&deg;</span>
            <Separator />
            <span>{temp_min}&deg;</span>
          </div>
        </div>
      </Card>
      <Card className="flex flex-col items-center p-4">
        <div className="text-primary flex items-center gap-2"><CloudFog size={20}/> <span className="font-semibold">Wind status</span></div>
        <h4 className="text-4xl font-bold">{wind_speed} 
            <sub className="text-lg font-normal">km/h</sub>
        </h4>
        <div className="c-flex gap-4">
        <Image src={'/wind.png'} alt="wind" width={22} height={22}/>
        <span className="text-lg font-semibold text-[#D59219]"> N{wind_direction}</span>
        </div>
      </Card>
      <Card className="flex flex-col items-center p-4 font-semibold">
        <h4 className="flex items-center gap-4 text-sm text-primary">
            <Image src={'/rain-drobs.svg'} alt="rain" width={20} height={20}/>
            Rain
        </h4>
        <span className="text-4xl font-bold uppercase">{rain_prediction}</span>
      </Card>
       <Card className="flex flex-col items-center p-4 font-semibold">
        <h4 className="flex items-center gap-4 text-sm text-primary">
            <Image src={'/humidity.svg'} alt="humidity" width={14} height={14}/>
            Humidity
        </h4>
        <span className="text-4xl font-bold ">{humidity}<span className="font-semibold text-3xl"> 
            %
            </span>
            </span>
      </Card>
      <Card className="flex flex-col items-center p-4 font-semibold">
        <h4 className="flex items-center gap-4 text-sm text-primary">
            <Image src={'/pressure.svg'} alt="pressure" width={20} height={20}/>
            Pressure
        </h4>
        <span className="text-4xl font-bold ">{pressure}<sub className="text-xl font-normal">hpa</sub>
            </span>
      </Card>
    </section>
  );
};

export default WeatherCard;
