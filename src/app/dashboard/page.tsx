import Footer from "@/components/custom/large/Footer";
import Forecast from "./Forecast";

import Map from "./Map";
import WeatherCard from "./WeatherCard";
import { Card } from "@/components/ui/card";

import Logo from "@/components/custom/atoms/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { LocateFixed,  MapPin,  Search } from "lucide-react";
const Dashboard = () => {
  return (
    <>
      <section className="hidden lg:block">
        <header className=" flex justify-between items-center p-4 w-11/12 max-w-7xl mx-auto">
     <div className="flex-1">

     <Logo  />
     </div>
     <div className="flex-1 flex items-center justify-between">

 
     <div className="flex items-center gap-1">

            <MapPin />
        <span className="text-xl">
             Cairo, EG</span>
     </div>
     <div className=" flex items-center relative w-full max-w-sm">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
  <Input
    type="search"
    placeholder="Search City"
    className=" w-full pl-10 pr-4 rounded-tr-none rounded-br-none"
  />
  <Button
  size={'icon'}
  className="py-3 rounded-tl-none rounded-bl-none"
  >
<LocateFixed />
  </Button>
</div>
</div>
    </header>
        <div className=" max-w-6xl w-11/12 mx-auto">
          <div className="flex items-center gap-16 justify-between mt-8">
            <WeatherCard />
            <Map />
          </div>
          <Forecast />
        </div>
        <Footer />
      </section>
      <section className="xl:hidden h-screen w-11/12 max-w-2xl mx-auto flex items-center justify-center">
        <Card className="p-4">
          <h2 className="font-bold text-xl ">⚠️ Desktop Only </h2>
          <p className="text-sm">
            {" "}
            For the best experience, please open the Dashboard on a desktop or
            laptop device. Mobile view is currently not supported.
          </p>
        </Card>
      </section>
    </>
  );
};

export default Dashboard;
