import { WeatherCurrentDTO } from "../dtos/weather-current.dto";

class WeatherAPIDataService {

    async getCurrentWeather(): Promise<WeatherCurrentDTO> {
        const responseJSON = await fetch(`${import.meta.env.VITE_WEATHER_API_URL}/current.json?q=Rio%20de%20Janeiro&key=${import.meta.env.VITE_WEATHER_API_KEY}`);
        const response: WeatherCurrentDTO = await responseJSON.json();
        if (response.error) {
            return {
                current: {
                    humidity: 69,
                    pressure_in: 30,
                    temp_c: 20,
                    wind_mph: 4,
                }
            } as WeatherCurrentDTO; 
        }

        return response;
    }
}

export { WeatherAPIDataService };