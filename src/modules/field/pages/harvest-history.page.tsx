import { NavLink, useParams, useSearchParams } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { generateColumns } from "../components/harvest-history-table/columns";
import { DataTable } from "../components/harvest-history-table/data-table";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { HarvestDataService } from "../data-services/harvest.data-service";
import { HarvestDTO } from "../dtos/harvest.dto";
import { toast } from "../../../components/ui/use-toast";
import { FieldDTO } from "../dtos/field.dto";
import { FieldDataService } from "../data-services/field.data-service";
import { useAuth } from "../../user/hooks/auth-context.hook";

export function HarvestHistoryPage() {
    const [harvestHistory, setHarvestHistory] = useState<HarvestDTO[] | undefined>(undefined);
    const [field, setField] = useState<FieldDTO | undefined>(undefined);

    const { fieldId } = useParams();
    const searchParamsState = useSearchParams();
    const searchParams = searchParamsState[0];
    const { email } = useAuth();

    async function loadHarvestHistoryAndField() {
        if (email) {
            const harvestDataService = new HarvestDataService();
            const fieldParam = fieldId ? parseInt(fieldId) : 0;
            const harvestHistoryDataResponse = await harvestDataService.list(fieldParam, email);
            setHarvestHistory(harvestHistoryDataResponse.history);
    
            const fieldDataService = new FieldDataService();
            const responseField = await fieldDataService.get(fieldParam, email);
            setField(responseField);
        }
    }

    function deleteHarvest(id: number) {
        if (email) {
            const fieldDataService = new HarvestDataService();
            fieldDataService.delete(id, email).then(() => {
                toast({
                    title: 'Registro de colheita removido com sucesso!',
                });
                loadHarvestHistoryAndField();
            });
        }
    }

    useEffect(() => {
        loadHarvestHistoryAndField();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email]);


    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Histórico de Colheitas</h1>
            <div>
                <h3 className="font-bold text-gray-700 mt-2 text-lg">Talhão</h3>
                <span className="font-bold text-gray-500 mr-4">ID: {fieldId}</span>
                <span className="font-bold text-gray-500">Plantação: {field?.planting}</span>
            </div>
            <div className="flex items-center justify-between my-3">
                <NavLink to={searchParams.get('dashboard') == 'true' ? `/fields/${fieldId}?dashboard=true` : `/fields`}>
                    <Button variant={'link'}><IoIosArrowBack className="mr-1" /> Voltar</Button>
                </NavLink>
                <NavLink to={searchParams.get('dashboard') == 'true' ? `/fields/${fieldId}/harvest-history/create?dashboard=true` : `/fields/${fieldId}/harvest-history/create`}>
                    <Button>Registrar Nova Colheita</Button>
                </NavLink>
            </div>
            <div className="w-full">
                <DataTable columns={generateColumns(deleteHarvest)} data={harvestHistory || [] as HarvestDTO[]} />
            </div>
        </div>
    )
}