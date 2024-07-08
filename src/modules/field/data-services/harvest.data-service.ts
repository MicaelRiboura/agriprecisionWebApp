import { CreateHarvestRequestDTO } from '../dtos/create-harvest-request.dto';
import { HarvestDTO } from '../dtos/harvest.dto';

class HarvestDataService {

    async list(fieldId: number, user: string): Promise<{ history: HarvestDTO[] }> {
        const responseJSON = await fetch(`${import.meta.env.VITE_HARVEST_API_URL}/harvest-history?field=${fieldId}&user=${user}`);
        const response: { history: HarvestDTO[] } = await responseJSON.json();
        return response;
    }

    async create(data: CreateHarvestRequestDTO): Promise<void> {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, String(value));
        });

        await fetch(`${import.meta.env.VITE_HARVEST_API_URL}/harvest-history/create`, {
            method: "POST",
            body: formData,
        });
    }

    async delete(id: number, user: string): Promise<{ history: HarvestDTO[] }> {
        const responseJSON = await fetch(`${import.meta.env.VITE_HARVEST_API_URL}/harvest-history/delete?id=${id}&user=${user}`, {
            method: 'DELETE',
        });
        const response: { history: HarvestDTO[] } = await responseJSON.json();
        return response;
    }
}

export { HarvestDataService };