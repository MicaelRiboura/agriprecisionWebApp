import { NavLink, useParams } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { generateColumns } from "../components/harvest-history-table/columns";
import { DataTable } from "../components/harvest-history-table/data-table";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { HarvestDataService } from "../data-services/harvest.data-service";
import { HarvestDTO } from "../dtos/harvest.dto";
import { toast } from "../../../components/ui/use-toast";

export function HarvestHistoryPage() {
    const [harvestHistory, setHarvestHistory] = useState<HarvestDTO[] | undefined>(undefined);

    const { fieldId } = useParams();

    async function loadHarvestHistory() {
        const harvestDataService = new HarvestDataService();
        const fieldParam = fieldId ? parseInt(fieldId) : 0;
        const harvestHistoryDataResponse = await harvestDataService.list(fieldParam, 'micael@gmail.com');
        setHarvestHistory(harvestHistoryDataResponse.history);
    }

    function deleteHarvest(id: number) {
        const fieldDataService = new HarvestDataService();
        fieldDataService.delete(id, 'micael@gmail.com').then(() => {
            toast({
                title: 'Registro de colheita removido com sucesso!',
            });
            loadHarvestHistory();
        });
    }

    useEffect(() => {
        loadHarvestHistory();
    }, []);


    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Histórico de Colheitas</h1>
            <div className="flex items-center justify-between my-3">
                <NavLink to={'/fields'}>
                    <Button variant={'link'}><IoIosArrowBack className="mr-1" /> Voltar</Button>
                </NavLink>
                <NavLink to={'/fields/harvest-history/create'}>
                    <Button>Registrar Nova Colheita</Button>
                </NavLink>
            </div>
            <div className="w-full">
                <DataTable columns={generateColumns(deleteHarvest)} data={harvestHistory || [] as HarvestDTO[]} />
            </div>
        </div>
    )
}