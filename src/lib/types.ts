export type WeatherData = {
  city: string;
  country: string;
  current_temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  description: string;
  pressure: number;
  wind_speed: number;
  wind_direction: string;
  rain_prediction: string;
  latitude: number;
  longitude: number;
  future_predictions: FuturePrediction[];
}

export type FuturePrediction = {
  time: string;
  temperature: number;
  humidity: number;
  wind_speed: number;
  rain: string;
}
