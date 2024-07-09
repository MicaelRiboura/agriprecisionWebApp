import { FaWind } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { IoWaterOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { WeatherAPIDataService } from "../data-services/weather-api.data-service";
import { WeatherCurrentDTO } from "../dtos/weather-current.dto";
import { GiClockwork } from "react-icons/gi";
import { MdOutlineEco } from "react-icons/md";
import { HarvestDataService } from "../../field/data-services/harvest.data-service";
import { MapProductivityDTO } from "../../field/dtos/map-productivity.dto";
import { plantingRequest } from "../../../fixdata/planting-necessity";
import { NavLink } from "react-router-dom";
import { Input } from "../../../components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useAuth } from "../../user/hooks/auth-context.hook";

export function Home() {
    const [weatherData, setWeatherData] = useState<WeatherCurrentDTO | undefined>(undefined);
    const [mapFields, setMapFields] = useState<MapProductivityDTO[] | undefined>(undefined);
    const [paramProduction, setParamProduction] = useState<number>(40);
    const { email } = useAuth();

    async function loadWeather() {
        const weatherService = new WeatherAPIDataService();
        const weatherDataResponse = await weatherService.getCurrentWeather();
        console.log(weatherDataResponse);
        setWeatherData(weatherDataResponse);
    }

    async function loadMapProductivity() {
        const harvestDataService = new HarvestDataService();
        if (email){
            const mapResponse = await harvestDataService.mapProductivity(email);
            setMapFields(mapResponse);
        }
    }

    function setStatusOfField(field: MapProductivityDTO) {
        const requests = plantingRequest[field.planting];
        if (weatherData) {
            if (weatherData.current.temp_c <= requests.minTempC || weatherData.current.temp_c >= requests.maxTempC) {
                return 'absolute bg-red-300 opacity-40 w-full h-full cursor-pointer rounded-sm';
            }

            if (field.average > paramProduction) {
                return 'absolute bg-green-300 opacity-40 w-full h-full cursor-pointer rounded-sm';
            } else if (field.average == paramProduction) {
                return 'absolute bg-yellow-300 opacity-40 w-full h-full cursor-pointer rounded-sm';
            } else {
                return 'absolute bg-blue-400 opacity-40 w-full h-full cursor-pointer rounded-sm';
            }
        }

        return 'absolute bg-gray-300 opacity-40 w-full h-full cursor-pointer rounded-sm';
    }

    useEffect(() => {
        loadWeather();
        loadMapProductivity();
    }, [email]);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3">
                    <Card>
                        <CardHeader className="pt-2 pb-1">
                            <CardTitle className="text-primary">
                                Mapa de Produtividade
                            </CardTitle>
                            <CardDescription>
                                Visualização dos talhões do terreno com base em sua produtividade em colheitas passadas.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="my-1 w-64">
                                <Label htmlFor="average_production" className="text-sm text-gray-500">Média parâmetro de colheita:</Label>
                                <Input id="average_production" type="number" value={paramProduction} onChange={(event) => setParamProduction(parseInt(event.target.value))}/>
                            </div>
                            <div className="flex flex-wrap">
                                {(mapFields && mapFields?.length > 0) && mapFields.map((field, i) => (
                                    <NavLink to={`/fields/${field.field}?dashboard=true`}>
                                        <div
                                            key={i} 
                                            className="h-72 w-44 bg-slate-100 m-1 relative rounded-sm" 
                                            style={{
                                                backgroundImage: "url('/src/assets/soil.jpg')",
                                                backgroundSize: '100%'
                                            }}
                                        >
                                            <div className={setStatusOfField(field)}></div>
                                            <div className="absolute bg-white p-2 rounded-sm m-4 -right-5 shadow-md border">
                                                <div className="flex items-center space-x-2">
                                                    <MdOutlineEco className="text-xl text-primary" /> <span className="font-bold text-gray-500 text-sm">{field.planting}</span>
                                                </div>
                                                <div className="text-xs text-right text-gray-500">
                                                    <span className="font-bold">ID:</span> {field.field}
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                )) || (<p className="text-gray-700 font-bold text-xl">Nenhum talhão cadastrado</p>)}
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="px-1 pt-4 flex items-center">
                                    <div className="h-4 w-4 bg-green-300 mr-1 rounded-sm"></div>
                                    <span className="text-gray-500 text-md">Produtividade Alta</span>
                                </div>
                                <div className="px-1 pt-4 flex items-center">
                                    <div className="h-4 w-4 bg-yellow-300 mr-1 rounded-sm"></div>
                                    <span className="text-gray-500 text-md">Produtividade Média</span>
                                </div>
                                <div className="px-1 pt-4 flex items-center">
                                    <div className="h-4 w-4 bg-blue-300 mr-1 rounded-sm"></div>
                                    <span className="text-gray-500 text-md">Produtividade Baixa</span>
                                </div>
                                <div className="px-1 pt-4 flex items-center">
                                    <div className="h-4 w-4 bg-red-300 mr-1 rounded-sm"></div>
                                    <span className="text-gray-500 text-md">Solo impróprio</span>
                                </div>
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
                                    <p className="font-bold">{weatherData?.current?.pressure_mb}<span className="text-xs font-medium ml-1">mb</span></p>
                                </div>
                                <div className="w-1/3 flex items-center flex-col">
                                    <div className="flex items-center">
                                        <FaWind />
                                        <h3 className="ml-1 font-medium text-md">Vento</h3>
                                    </div>
                                    <p className="font-bold">{weatherData?.current?.wind_mph}<span className="text-xs font-medium ml-1">mph</span></p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="mt-4">
                        <CardHeader>
                            <CardTitle className="text-primary">
                                Condições das Plantações
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <h4 className="text-lg font-bold text-gray-500">Milho</h4>
                            <p className="ml-2 text-md text-gray-700">Temperatura entre {plantingRequest['Milho'].minTempC}°C e {plantingRequest['Milho'].maxTempC}°C</p>
                            <h4 className="text-lg font-bold text-gray-500">Soja</h4>
                            <p className="ml-2 text-md text-gray-700">Temperatura entre {plantingRequest['Soja'].minTempC}°C e {plantingRequest['Soja'].maxTempC}°C</p>
                            <h4 className="text-lg font-bold text-gray-500">Cana-de-açúcar</h4>
                            <p className="ml-2 text-md text-gray-700">Temperatura entre {plantingRequest['Cana-de-açúcar'].minTempC}°C e {plantingRequest['Cana-de-açúcar'].maxTempC}°C</p>
                            <h4 className="text-lg font-bold text-gray-500">Feijão</h4>
                            <p className="ml-2 text-md text-gray-700">Temperatura entre {plantingRequest['Feijão'].minTempC}°C e {plantingRequest['Feijão'].maxTempC}°C</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}