import { Button } from "../../../components/ui/button";
import { Payment, columns } from "../components/field-table/columns";
import { DataTable } from "../components/field-table/data-table";

export function HarvestHistoryPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Histórico de Colheitas</h1>
            <div className="flex items-center justify-end my-3">
                <Button>Registrar Nova Colheita</Button>
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