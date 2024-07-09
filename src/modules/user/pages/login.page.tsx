import background from '../../../assets/background-login.jpg';
import logo from '../../../assets/logo.svg';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../components/ui/form';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/auth-context.hook';

const formSchema = z.object({
    email: z.string({ required_error: 'E-mail obrigatório' }).min(1, 'E-mail obrigatório'),
    password: z.string({ required_error: 'Senha obrigatória' }).min(1, 'Senha obrigatória'),
});

export function LoginPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const { signIn } = useAuth();

    function onSubmit(values: z.infer<typeof formSchema>) {
        signIn(values);
    }

    return (
        <div className="h-screen w-screen flex">
            <div className="w-1/2"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '50%',
                }}
            >
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <div className="p-4">
                    <img src={logo} className="h-20 mb-20" alt="agriprecision" />
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                                <h1 className="text-primary font-bold text-2xl mb-12">Entre</h1>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="my-2">
                                            <FormLabel>E-mail</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="my-2">
                                            <FormLabel>Senha</FormLabel>
                                            <FormControl>
                                                <Input type="password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="flex flex-col justify-center">
                                    <Button className="w-full my-2" type="submit">Entrar</Button>
                                    <NavLink to={'/register'}>
                                        <Button className="w-full my-2" type="button" variant={'link'}>Cadastre-se</Button>
                                    </NavLink>
                                </div>
                            </form>
                        </Form>
                </div>
            </div>
        </div>
    );
}