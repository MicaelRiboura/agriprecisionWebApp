"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../../../components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";


const formSchema = z.object({
    harvestDate: z.string(),
    humidity: z.coerce.number().min(1, "Valor da umidade deve ser acima de 0."),
    totalProduction: z.coerce.number().min(1, "Valor do total de produção deve ser acima de 0."),
})

export function HarvestPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            harvestDate: "",
            humidity: 0,
            totalProduction: 0,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-start mb-12">
                <NavLink to={'/harvest-history'}>
                    <Button>
                        <IoIosArrowBack />
                        <span className="ml-2">Voltar</span>
                    </Button>
                </NavLink>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white rounded  p-8 lg:p-12">
                    <h1 className="text-2xl font-bold mb-3 text-primary">Colheita</h1>
                    <FormField
                        control={form.control}
                        name="harvestDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Data</FormLabel>
                                <FormControl>
                                    <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="humidity"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Umidade do Solo</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="totalProduction"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Total de Produção</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Salvar</Button>
                </form>
            </Form>
        </div>
    );
}