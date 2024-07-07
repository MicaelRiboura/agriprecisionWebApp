import { FieldDTO } from '../dtos/field.dto';

class FieldDataService {

    async list(user: string): Promise<{ fields: FieldDTO[] }> {
        const responseJSON = await fetch(`${import.meta.env.VITE_HARVEST_API_URL}/fields?user=${user}`);
        const response: { fields: FieldDTO[] } = await responseJSON.json();
        return response;
    }
}

export { FieldDataService };