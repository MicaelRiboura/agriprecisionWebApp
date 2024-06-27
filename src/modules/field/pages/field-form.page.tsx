import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../../../components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";


const formSchema = z.object({
    username: z.string().min(2).max(50),
    name: z.string().min(2).max(50),
    plantation: z.string().min(2).max(50),
    area: z.number().min(1),
});

export function FieldPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            plantation: "",
            area: 0,
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-start mb-12">
                <NavLink to={'/fields'}>
                    <Button>
                        <IoIosArrowBack />
                        <span className="ml-2">Voltar</span>
                    </Button>
                </NavLink>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white rounded  p-8 lg:p-12">
                    <h1 className="text-2xl font-bold mb-3 text-primary">Talhão</h1>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    Nome de preferência para identificar esse talhão.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="plantation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Plantação</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
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
                                    <Input type="number" {...field} />
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