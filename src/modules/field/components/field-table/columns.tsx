import { ColumnDef } from "@tanstack/react-table"
import { FieldDTO } from "../../dtos/field.dto"

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
]
