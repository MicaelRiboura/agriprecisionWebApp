import { FaWind } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { IoWaterOutline } from "react-icons/io5";

export function Home() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Início</h1>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>
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
                            <CardTitle>
                                Temperatura
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="font-bold text-center">
                                <span className="text-6xl">30</span>
                                <span className="text-4xl">°C</span>
                            </div>
                            <div className="flex w-full pt-4">
                                <div className="w-1/3 flex justify-center border-r">
                                <div className="flex items-center">
                                    <IoWaterOutline />
                                    <h3 className="ml-1 font-medium text-md">Umidade</h3>
                                </div>

                                    <p></p>
                                </div>
                                <div className="w-1/3 flex justify-center border-r">
                                    <div className="flex items-center">
                                        <FaWind />
                                        <h3 className="ml-1 ont-medium text-md">Pressão</h3>
                                    </div>
                                    <p></p>
                                </div>
                                <div className="w-1/3 flex justify-center">
                                    <div className="flex items-center">
                                        <FaWind />
                                        <h3 className="ml-1 font-medium text-md">Vento</h3>
                                    </div>
                                    <p></p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="mt-4">
                        <CardHeader>
                            <CardTitle>
                                Principais Insumos
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