export type WeatherCurrentDTO = {
    current: {
        cloud: number;
        condition: {
            code: number;
            icon: string;
            text: string;
        },
        dewpoint_c: number;
        dewpoint_f: number;
        feelslike_c: number;
        feelslike_f: number;
        gust_kph: number;
        gust_mph: number;
        heatindex_c: number;
        heatindex_f: number;
        humidity: number;
        is_day: number;
        last_updated: string;
        precip_in: number;
        precip_mm: number;
        pressure_in: number;
        pressure_mb: number;
        temp_c: number;
        temp_f: number;
        uv: number;
        vis_km: number;
        vis_miles: number;
        wind_degree: number;
        wind_dir: string;
        wind_kph: number;
        wind_mph: number;
        windchill_c: number;
        windchill_f: number;
    }
}

class WeatherAPIDataService {

    async getCurrentWeather() {
        const responseJSON = await fetch(`${import.meta.env.VITE_WEATHER_API_URL}/current.json?q=Rio%20de%20Janeiro&key=${import.meta.env.VITE_WEATHER_API_KEY}`);
        const response: WheatherResponseCurrent = await responseJSON.json();
        return response;
    }
}

export { WeatherAPIDataService };