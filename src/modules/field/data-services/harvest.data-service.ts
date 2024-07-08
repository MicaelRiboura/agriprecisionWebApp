import { HarvestDTO } from '../dtos/harvest.dto';

class HarvestDataService {

    async list(fieldId: number, user: string): Promise<{ history: HarvestDTO[] }> {
        const responseJSON = await fetch(`${import.meta.env.VITE_HARVEST_API_URL}/harvest-history?field=${fieldId}&user=${user}`);
        const response: { history: HarvestDTO[] } = await responseJSON.json();
        return response;
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