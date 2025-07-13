export type WeatherData = {
  current_weather:CurrentWeather;
  latitude: number;
  longitude: number;
  forecast: Forecast[];
  map_html:string
}
type CurrentWeather = {
  city: string;
  country: string;
  current_temp: number;
  feels_like: number;
  min_temp: number;
  max_temp: number;
  humidity: number;
  description: string;
  pressure: number;
  wind_speed: number;
  wind_direction: string;
  rain_prediction: 'Yes' | 'No';
  rain_model_mse: number;
};

export type Forecast = {
  time: string;
  temp: number;
  humidity: number;
  rain_probability: number;
  wind_direction: string;
}


export type WeatherPrediction = {
  status: "success";
  prediction: keyof AllPredictions; 
  confidence: number; 
  file_name: string;
  file_size: string;
  all_predictions: AllPredictions;
};

export type AllPredictions = {
  dew: number;
  fogsmog: number;
  frost: number;
  glaze: number;
  hail: number;
  lightning: number;
  rain: number;
  rainbow: number;
  rime: number;
  sandstorm: number;
  snow: number;
};