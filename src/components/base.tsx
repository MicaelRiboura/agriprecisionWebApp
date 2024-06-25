import { PropsWithChildren } from "react";
import { Sidebar } from "./ui/sidebar";

export function Base({ children }: Readonly<PropsWithChildren>) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="grow p-8">
                {children}
            </div>
        </div>
    );
}
