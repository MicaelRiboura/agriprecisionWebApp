import { CreateHarvestRequestDTO } from '../dtos/create-harvest-request.dto';
import { HarvestDTO } from '../dtos/harvest.dto';
import { MapProductivityDTO } from '../dtos/map-productivity.dto';

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

    async mapProductivity(user: string): Promise<MapProductivityDTO[]> {
        const responseJSON = await fetch(`${import.meta.env.VITE_HARVEST_API_URL}/harvest-history/map-productivity?user=${user}`);
        const response: { fields: MapProductivityDTO[] } = await responseJSON.json();
        return response.fields;
    }
}

export { HarvestDataService };