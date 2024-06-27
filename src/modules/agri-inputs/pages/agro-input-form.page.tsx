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
    name: z.string().min(2).max(50),
    total: z.coerce.number().min(1),
    measure: z.string().min(2).max(50),
})

export function AgroInputPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            total: 0,
            measure: "",
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
                <NavLink to={'/agro-inputs'}>
                    <Button>
                        <IoIosArrowBack />
                        <span className="ml-2">Voltar</span>
                    </Button>
                </NavLink>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white rounded p-8 lg:p-12">
                    <h1 className="text-2xl font-bold mb-3 text-primary">Insumo Agrícola</h1>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="total"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Quantidade total</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="measure"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Medida</FormLabel>
                                <FormControl>
                                    <Input {...field} />
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