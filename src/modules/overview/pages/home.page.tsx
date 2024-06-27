import { FaWind } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { IoWaterOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { WeatherAPIDataService } from "../data-services/weather-api.data-service";
import { WeatherCurrentDTO } from "../dtos/weather-current.dto";
import { GiClockwork } from "react-icons/gi";

export function Home() {
    const [weatherData, setWeatherData] = useState<WeatherCurrentDTO | undefined>(undefined);

    async function loadWeather() {
        const weatherService = new WeatherAPIDataService();
        const weatherDataResponse = await weatherService.getCurrentWeather();
        console.log(weatherDataResponse);
        setWeatherData(weatherDataResponse);
    }

    useEffect(() => {
        loadWeather();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-primary">
                                Mapa de Produtividade
                            </CardTitle>
                            <CardDescription>
                                Visualização dos talhões do terreno com base em sua produtividade em colheitas passadas.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <div key={i} className="h-72 w-44 bg-slate-100 m-1"></div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-primary">
                                Temperatura
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="font-bold text-center text-gray-700">
                                <span className="text-6xl">{weatherData?.current?.temp_c}</span>
                                <span className="text-4xl">°C</span>
                            </div>
                            <div className="flex w-full pt-4 text-gray-700">
                                <div className="w-1/3 flex items-center flex-col border-r">
                                <div className="flex items-center">
                                    <IoWaterOutline />
                                    <h3 className="ml-1 font-medium text-md">Umidade</h3>
                                </div>

                                    <p className="font-bold">{weatherData?.current?.humidity}<span className="text-xs font-medium ml-1">g/m³</span></p>
                                </div>
                                <div className="w-1/3 flex items-center flex-col border-r">
                                    <div className="flex items-center">
                                        <GiClockwork />
                                        <h3 className="ml-1 ont-medium text-md">Pressão</h3>
                                    </div>
                                    <p className="font-bold">{weatherData?.current?.temp_c}<span className="text-xs font-medium ml-1">mmHg</span></p>
                                </div>
                                <div className="w-1/3 flex items-center flex-col">
                                    <div className="flex items-center">
                                        <FaWind />
                                        <h3 className="ml-1 font-medium text-md">Vento</h3>
                                    </div>
                                    <p className="font-bold">{weatherData?.current?.temp_c}<span className="text-xs font-medium ml-1">km/h</span></p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="mt-4">
                        <CardHeader>
                            <CardTitle className="text-primary">
                                Insumos necessários
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Água: <span>200l</span></p>
                            <p>Fertilizante: <span>2</span></p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}