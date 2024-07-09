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
import { NavLink, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { HarvestDataService } from "../data-services/harvest.data-service";
import { useToast } from "../../../components/ui/use-toast";
import { useAuth } from "../../user/hooks/auth-context.hook";


const formSchema = z.object({
    harvestDate: z.string(),
    totalProduction: z.coerce.number().min(1, "Valor do total de produção deve ser acima de 0."),
})

export function HarvestPage() {
    const { fieldId } = useParams();
    const searchParamsState = useSearchParams();
    const searchParams = searchParamsState[0];
    const navigate = useNavigate();
    const { toast } = useToast();

    const { email } = useAuth();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            harvestDate: "",
            totalProduction: 0,
        },
    });


    function onSubmit(values: z.infer<typeof formSchema>) {
        if (fieldId) {
            const harvestDataService = new HarvestDataService();
            if (email) {
                harvestDataService.create({
                    date: values.harvestDate,
                    total_production: values.totalProduction,
                    user: email,
                    field: parseInt(fieldId),
                }).then(() => {
                    toast({
                        title: 'Registro de colheita criado com sucesso!',
                    });
        
                    navigate(`/fields/${fieldId}/harvest-history`);
                });
            }
        }
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-start mb-12">
                <NavLink to={searchParams.get('dashboard') == 'true' ? `/fields/${fieldId}/harvest-history?dashboard=true` : `/fields/${fieldId}/harvest-history`}>
                    <Button variant={'link'}>
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
                        name="totalProduction"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Total de Produção (Unidades)</FormLabel>
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