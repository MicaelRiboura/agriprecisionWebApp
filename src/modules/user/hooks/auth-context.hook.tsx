import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserDataService } from "../data-services/user.data-service";
import { LoginUserRequestDTO } from "../dtos/login-user-request.dto";
import { useToast } from "../../../components/ui/use-toast";

type AuthContextDTO = {
    signed: boolean;
    email: string | undefined;
    token: string | undefined;
    signIn: (data: LoginUserRequestDTO) => Promise<void>;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextDTO>({} as AuthContextDTO);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [signed, setSigned] = useState<boolean>(false);
    const [token, setToken] = useState<string | undefined>();
    const [email, setEmail] = useState<string | undefined>();
    const location = useLocation();

    const navigate = useNavigate();
    const { toast } = useToast();

    useEffect(() => {
        const storagedEmail = localStorage.getItem('@agri:email');
        const storagedToken = localStorage.getItem('@agri:token');
        if (storagedEmail && storagedToken) {
            
            setSigned(storagedToken !== '');
            setEmail(storagedEmail);
            setToken(storagedToken);
        } else if (location.pathname !== '/register') {
           navigate('/login');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const signIn = useCallback(async (data: LoginUserRequestDTO): Promise<void> => {
        try {
            const userDataService = new UserDataService();
            const resp = await userDataService.login(data);
            console.log(resp)
            if (resp?.token) {
                setSigned(true);
                setEmail(resp.email);
                setToken(resp.token);
                localStorage.setItem('@agri:email', resp.email);
                localStorage.setItem('@agri:token', resp.token);

                toast({
                    title: 'Bem-vindo!',
                });
                navigate('/');
            } else {
                toast({
                    title: 'E-mail ou senha inválidos',
                    variant: 'destructive'
                });
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const signOut = useCallback(() => {
        localStorage.clear();
        setEmail(undefined);
        setToken(undefined);
        setSigned(false);
        navigate('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const values = useMemo(() => ({
        signed,
        email,
        token,
        signIn,
        signOut,
    }), [
        signed,
        email,
        token,
        signIn,
        signOut,
    ]);

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
