'use client';

import Footer from "@/components/custom/large/Footer";
import Forecast from "./Forecast";
import Map from "./Map";
import WeatherCard from "./WeatherCard";
import { Card } from "@/components/ui/card";

import Logo from "@/components/custom/atoms/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LocateFixed, MapPin, Search } from "lucide-react";
import { fetchWeather } from "@/services/dashboard";
import { useState } from "react";
import { WeatherData } from "@/lib/types";
import Loading from "./loading";
import { useMutation, useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const [city, setCity] = useState("cairo");

  const { data, isLoading } = useQuery<WeatherData | null>({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
  });

  const mutate = useMutation({
    mutationFn: fetchWeather,
    onSuccess: () => {
      setCity(city);
    },
    onError: (error: any) => {
      alert("Error: " + error.message);
    },
  });

  const hanldeSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const cityInput = form.elements.namedItem("city") as HTMLInputElement;
    const newCity = cityInput.value.trim();
    if (!newCity) return;

    await mutate.mutateAsync(newCity);
    setCity(newCity);
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <section>
        <header className="flex justify-between items-center px-4 w-11/12 max-w-7xl mx-auto">
          <div className="flex-1">
            <Logo />
          </div>

          <div className="flex-1 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <MapPin />
              <span className="text-xl">
                {data?.current_weather?.city ||
                  data?.location?.name ||
                  "Unknown City"}
                ,{" "}
                {data?.current_weather?.country ||
                  data?.location?.country ||
                  "??"}
              </span>
            </div>

            <form
              onSubmit={hanldeSearch}
              className="flex items-center relative w-full max-w-sm"
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                name="city"
                type="search"
                placeholder="Search City"
                className="w-full pl-10 pr-4 rounded-tr-none rounded-br-none"
              />
              <Button
                type="submit"
                size="icon"
                className="py-3 rounded-tl-none rounded-bl-none"
              >
                <LocateFixed />
              </Button>
            </form>
          </div>
        </header>

        <div className="max-w-6xl w-11/12 mx-auto px-8">
          {data != null ? (
            <>
              <div className="flex items-center gap-16 justify-between mt-8">
                <WeatherCard
                  current_temp={data.current_weather.current_temp}
                  feels_like={data.current_weather.feels_like}
                  humidity={data.current_weather.humidity}
                  pressure={data.current_weather.pressure}
                  rain_prediction={data.current_weather.rain_prediction}
                  temp_max={data.current_weather.max_temp}
                  temp_min={data.current_weather.min_temp}
                  wind_direction={data.current_weather.wind_direction}
                  wind_speed={data.current_weather.wind_speed}
                />
                <Map
                  map={data?.map_html}
                  lat={data.latitude}
                  long={data.longitude}
                />
              </div>
              <Forecast data={data.forecast} />
            </>
          ) : (
            <div className="c-flex h-[70vh]">
              <Card className="px-10 py-5">
                City not found. Please try again.
              </Card>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
