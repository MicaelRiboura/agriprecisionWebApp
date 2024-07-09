import { WeatherCurrentDTO } from "../dtos/weather-current.dto";

class WeatherAPIDataService {

    async getCurrentWeather(): Promise<WeatherCurrentDTO> {
        const responseJSON = await fetch(`${import.meta.env.VITE_WEATHER_API_URL}/current.json?q=Rio%20de%20Janeiro&key=${import.meta.env.VITE_WEATHER_API_KEY}`);
        const response: WeatherCurrentDTO = await responseJSON.json();
        return response;
    }
}

export { WeatherAPIDataService };