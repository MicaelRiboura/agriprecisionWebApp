import { ColumnDef } from "@tanstack/react-table"
import { FieldDTO } from "../../dtos/field.dto"
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { MdOutlineHistory } from "react-icons/md";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../../../../components/ui/tooltip";

export const generateColumns = (deleteAction: (id: number) => void = () => undefined) => {
    const columns: ColumnDef<FieldDTO>[] = [
        {
            accessorKey: "area",
            header: "Área",
        },
        {
            accessorKey: "planting",
            header: "Plantação",
        },
        {
            id: "actions",
            header: 'Ações',
            enableHiding: false,
            cell: ({ row }) => {
                const id = row.original.id;

                return (
                    <div className="flex space-x-4 text-xl">
                        <NavLink to={`/fields/${id}`}>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <FiEdit className="text-yellow-600 cursor-pointer" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Editar o talhão</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </NavLink>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <FiTrash2 className="text-red-500 cursor-pointer" onClick={() => deleteAction(id)} />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Remover o talhão</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <NavLink to={`/fields/${id}/harvest-history`}>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <MdOutlineHistory className="text-xl text-primary cursor-pointer" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Consultar histórico de colheitas</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            
                        </NavLink>
                    </div>
                )
            },
        },
    ];

    return columns;
}
