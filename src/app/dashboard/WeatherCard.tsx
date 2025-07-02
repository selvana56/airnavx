import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

import { CloudFog } from "lucide-react";

const WeatherCard = () => {
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
              <span className="text-2xl">33.2 &deg;C</span>
              <span className="text-xs text-black">Feels Like 33.2 &deg;C</span>
            </div>
          </div>
          <div>
            <span>34.3&deg;</span>
            <Separator />
            <span>34.3&deg;</span>
          </div>
        </div>
      </Card>
      <Card className="flex flex-col items-center p-4">
        <div className="text-primary flex items-center gap-2"><CloudFog size={20}/> <span className="font-semibold">Wind status</span></div>
        <h4 className="text-4xl font-bold">7.70 
            <sub className="text-lg font-normal">km/h</sub>
        </h4>
        <Image src={'/wind.svg'} alt="wind" width={50} height={50}/>
      </Card>
      <Card className="flex flex-col items-center p-4 font-semibold">
        <h4 className="flex items-center gap-4 text-sm text-primary">
            <Image src={'/rain-drobs.svg'} alt="rain" width={20} height={20}/>
            Rain
        </h4>
        <span className="text-4xl font-bold uppercase">NO</span>
      </Card>
       <Card className="flex flex-col items-center p-4 font-semibold">
        <h4 className="flex items-center gap-4 text-sm text-primary">
            <Image src={'/humidity.svg'} alt="humidity" width={14} height={14}/>
            Humidity
        </h4>
        <span className="text-4xl font-bold ">26<span className="font-semibold text-3xl"> 
            %
            </span>
            </span>
      </Card>
      <Card className="flex flex-col items-center p-4 font-semibold">
        <h4 className="flex items-center gap-4 text-sm text-primary">
            <Image src={'/pressure.svg'} alt="pressure" width={20} height={20}/>
            Humidity
        </h4>
        <span className="text-4xl font-bold ">1009<sub className="text-xl font-normal">hpa</sub>
            </span>
      </Card>
    </section>
  );
};

export default WeatherCard;
