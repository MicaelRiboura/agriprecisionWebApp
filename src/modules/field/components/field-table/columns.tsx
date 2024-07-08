import { ColumnDef } from "@tanstack/react-table"
import { FieldDTO } from "../../dtos/field.dto"
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { NavLink } from "react-router-dom";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<FieldDTO>[] = [
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
                        <FiEdit className="text-yellow-600 cursor-pointer" />

                    </NavLink>
                    <FiTrash2 className="text-red-500 cursor-pointer" onClick={() => console.log('delete', id)} />
                </div>
            )
        },
    },
]
