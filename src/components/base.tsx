import { Sidebar } from "./ui/sidebar";
import { Outlet } from "react-router-dom";

export function Base() {
    return (
        <div className="flex h-screen overflow-auto">
            <Sidebar />
            <div className="grow p-8 bg-agrigray min-h-screen h-max">
                <Outlet />
            </div>
        </div>
    );
}
