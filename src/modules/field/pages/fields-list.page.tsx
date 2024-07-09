import { NavLink } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { generateColumns } from "../components/field-table/columns";
import { DataTable } from "../components/field-table/data-table";
import { useEffect, useState } from "react";
import { FieldDataService } from "../data-services/field.data-service";
import { FieldDTO } from "../dtos/field.dto";
import { toast } from "../../../components/ui/use-toast";

export function FieldsList() {
    const [fields, setFields] = useState<FieldDTO[] | undefined>(undefined);

    async function loadFieldsList() {
        const fieldDataService = new FieldDataService();
        const fieldsDataResponse = await fieldDataService.list('micael@gmail.com');
        setFields(fieldsDataResponse.fields);
    }

    function deleteField(id: number) {
        const fieldDataService = new FieldDataService();
        fieldDataService.delete(id, 'micael@gmail.com').then(() => {
            toast({
                title: 'Talhão removido com sucesso!',
            });
            loadFieldsList();
        });
    }

    useEffect(() => {
        loadFieldsList();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Talhões</h1>
            <div className="flex items-center justify-end my-3">
                <NavLink to={'/fields/create'}>
                    <Button>Registrar Novo</Button>
                </NavLink>
            </div>
            <div className="w-full">
                <DataTable columns={generateColumns(deleteField)} data={fields || ([] as FieldDTO[])} />
            </div>
        </div>
    )
}