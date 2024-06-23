import { PropsWithChildren } from "react";
import { Sidebar } from "./ui/sidebar";

export function Base({ children }: Readonly<PropsWithChildren>) {
    return (
        <div className="grid grid-cols-6">
            <div>
                <Sidebar />
            </div>
            <div className="grid-col-span-5">
                {children}
            </div>
        </div>
    );
}
