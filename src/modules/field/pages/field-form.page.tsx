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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../components/ui/select";
import { Input } from "../../../components/ui/input";
import { NavLink, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FieldDataService } from "../data-services/field.data-service";
import { useToast } from "../../../components/ui/use-toast";
import { useCallback, useEffect } from "react";
import { MdOutlineHistory } from "react-icons/md";
import { useAuth } from "../../user/hooks/auth-context.hook";


const formSchema = z.object({
    planting: z.string().min(2).max(50),
    area: z.coerce.number().min(1),
});

export function FieldPage() {
    const { id } = useParams();
    const searchParamsState = useSearchParams();
    const searchParams = searchParamsState[0];
    const { email } = useAuth();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            area: 50000,
            planting: '',
        },
    });

    const loadField = useCallback(async (id: number | undefined) => {
        const fieldDataService = new FieldDataService();
        if (id && email) {
            const responseField = await fieldDataService.get(id, email);
            console.log(responseField.planting);
            form.setValue('planting', responseField.planting);
            form.setValue('area', responseField.area);
            
        }
    }, [form, email]);

    useEffect(() => {
        loadField(id ? parseInt(id) : undefined);
    }, [id, loadField]);

    const navigate = useNavigate();
    const { toast } = useToast();

    function onSubmit(values: z.infer<typeof formSchema>) {
        const fieldDataService = new FieldDataService();
        if (email) {
            if (id) {
                fieldDataService.update({
                    id: parseInt(id),
                    area: values.area,
                    planting: values.planting,
                    user: email,
                }).then(() => {
                    toast({
                        title: 'Talhão atualizado com sucesso!',
                    });
    
                    navigate('/fields');
                });
            } else {
                fieldDataService.create({
                    area: values.area,
                    planting: values.planting,
                    user: email,
                }).then(() => {
                    toast({
                        title: 'Talhão criado com sucesso!',
                    });
            
                    navigate('/fields');
                });
            }
        }
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-12">
                <NavLink to={searchParams.get('dashboard') == 'true' ? `/` : '/fields'}>
                    <Button variant={'link'}>
                        <IoIosArrowBack className="text-lg" />
                        <span className="ml-2">Voltar</span>
                    </Button>
                </NavLink>
                {id && (
                    <NavLink to={searchParams.get('dashboard') == 'true' ? `/fields/${id}/harvest-history?dashboard=true` : `/fields/${id}/harvest-history`}>
                        <Button>
                            <MdOutlineHistory className="text-lg" />
                            <span className="ml-2">Histórico de colheita</span>
                        </Button>
                    </NavLink>
                )}
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white rounded  p-8 lg:p-12">
                    <h1 className="text-2xl font-bold mb-3 text-primary">Talhão</h1>
                    <FormField
                        control={form.control}
                        name="planting"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Plantação</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecione uma plantação para o seu talhão" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Soja">Soja</SelectItem>
                                        <SelectItem value="Milho">Milho</SelectItem>
                                        <SelectItem value="Cana-de-açúcar">Cana-de-açúcar</SelectItem>
                                        <SelectItem value="Feijão">Feijão</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="area"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Área</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} min="50000" max="300000" step="1000" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-end">
                        <Button type="submit">Salvar</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}