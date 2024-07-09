import { LoginUserRequestDTO } from "../dtos/login-user-request.dto";
import { LoginUserResponseDTO } from "../dtos/login-user-response.dto";
import { RegisterUserRequestDTO } from "../dtos/register-user-request.dto";

export class UserDataService {
    async register(data: RegisterUserRequestDTO): Promise<{msg: string }> {
        const response = await fetch(`${import.meta.env.VITE_USER_API_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return response.json();
    }

    async login(data: LoginUserRequestDTO): Promise<LoginUserResponseDTO> {
        const response = await fetch(`${import.meta.env.VITE_USER_API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return response.json();
    }
}