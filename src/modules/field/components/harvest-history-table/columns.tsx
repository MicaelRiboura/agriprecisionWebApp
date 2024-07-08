import { ColumnDef } from "@tanstack/react-table";
import { HarvestDTO } from "../../dtos/harvest.dto";
import { FiTrash2 } from "react-icons/fi";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../../../../components/ui/tooltip";

export const generateColumns = (deleteAction: (id: number) => void = () => undefined) => {
    const columns: ColumnDef<HarvestDTO>[] = [
        {
            accessorKey: "date",
            header: "Data da Colheita",
            cell: ({ cell }) => {
                const dateFormated = new Date(`${cell.getValue()}T00:00:00.000`); 
                return (
                    <p>{dateFormated.getDate() < 10 ? '0' : ''}{dateFormated.getDate()}/{dateFormated.getMonth() + 1 < 10 ? '0' : ''}{dateFormated.getMonth() + 1}/{dateFormated.getFullYear()}</p>
                )
            },
        },
        {
            accessorKey: "total_production",
            header: "Produção Total (Unidades)",
        },
        {
            id: "actions",
            header: 'Ações',
            enableHiding: false,
            cell: ({ row }) => {
                const id = row.original.id;

                return (
                    <div className="flex space-x-4 text-xl">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <FiTrash2 className="text-red-500 cursor-pointer" onClick={() => deleteAction(id)} />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Remover o registro de colheita</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                )
            },
        },
    ];

    return columns;
}
