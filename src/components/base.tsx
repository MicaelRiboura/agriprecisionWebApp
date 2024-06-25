import { Sidebar } from "./ui/sidebar";
import { Outlet } from "react-router-dom";

export function Base() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="grow p-8">
                <Outlet />
            </div>
        </div>
    );
}
