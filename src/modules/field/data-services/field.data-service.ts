import { CreateFieldRequestDTO } from '../dtos/create-field-request.dto';
import { FieldDTO } from '../dtos/field.dto';

class FieldDataService {

    async list(user: string): Promise<{ fields: FieldDTO[] }> {
        const responseJSON = await fetch(`${import.meta.env.VITE_HARVEST_API_URL}/fields?user=${user}`);
        const response: { fields: FieldDTO[] } = await responseJSON.json();
        return response;
    }

    async create(data: CreateFieldRequestDTO): Promise<void> {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, String(value));
        });

        await fetch(`${import.meta.env.VITE_HARVEST_API_URL}/fields/create`, {
            method: "POST",
            body: formData,
        });
    }
}

export { FieldDataService };