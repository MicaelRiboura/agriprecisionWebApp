import { NavLink } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { generateColumns } from "../components/field-table/columns";
import { DataTable } from "../components/field-table/data-table";
import { useEffect, useState } from "react";
import { FieldDataService } from "../data-services/field.data-service";
import { FieldDTO } from "../dtos/field.dto";
import { toast } from "../../../components/ui/use-toast";
import { useAuth } from "../../user/hooks/auth-context.hook";

export function FieldsList() {
    const [fields, setFields] = useState<FieldDTO[] | undefined>(undefined);
    const { email } = useAuth();

    async function loadFieldsList() {
        if (email) {
            const fieldDataService = new FieldDataService();
            const fieldsDataResponse = await fieldDataService.list(email);
            setFields(fieldsDataResponse.fields);
        }
    }

    function deleteField(id: number) {
        if (email) {
            const fieldDataService = new FieldDataService();
            fieldDataService.delete(id, email).then(() => {
                toast({
                    title: 'Talhão removido com sucesso!',
                });
                loadFieldsList();
            });
        }
    }

    useEffect(() => {
        loadFieldsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email]);

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