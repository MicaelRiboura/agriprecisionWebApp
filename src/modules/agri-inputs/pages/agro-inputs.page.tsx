import { NavLink } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Payment, columns } from "../components/agro-inputs-table/columns";
import { DataTable } from "../components/agro-inputs-table/data-table";

export function AgroInputsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Insumos Agrícolas</h1>
            <div className="flex items-center justify-end my-3">
                <NavLink to="/agro-inputs/create">
                    <Button>Registrar novo insumo</Button>
                </NavLink>
            </div>
            <div className="w-full">
                <DataTable columns={columns} data={[
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                    {
                        id: "728ed52f",
                        amount: 100,
                        status: "pending",
                        email: "m@example.com",
                    } as Payment,
                ]} />
            </div>
        </div>
    )
}