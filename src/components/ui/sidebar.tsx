import { MdOutlineAllInbox, MdOutlineEco } from 'react-icons/md';
import logo from '../../assets/logo.svg';

export function Sidebar() {
    return (
        <aside id="sidebar" className="fixed left-0 top-0 z-40 h-screen w-64 transition-transform" aria-label="Sidebar">
            <div className="flex h-full flex-col overflow-y-auto border-r border-slate-200 bg-white px-3 py-4 dark:border-slate-700 dark:bg-slate-900">
                <div className="mb-10 flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white">
                    <img src={logo} />
                </div>
                <ul className="space-y-2 text-sm font-medium">
                    <li>
                        <a href={'/'} className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 hover:text-green-700 dark:text-white dark:hover:bg-slate-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lucide lucide-home" width="24" height="24" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            <span className="ml-3 flex-1 whitespace-nowrap">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href={'/'} className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 hover:text-green-700 dark:text-white dark:hover:bg-slate-700">
                            <MdOutlineEco className="text-xl" />
                            <span className="ml-3 flex-1 whitespace-nowrap">Talhões</span>
                        </a>
                    </li>
                    <li>
                        <a href={'/'} className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 hover:text-green-700 dark:text-white dark:hover:bg-slate-700">
                            <MdOutlineAllInbox className="text-xl" />
                            <span className="ml-3 flex-1 whitespace-nowrap">Insumos agrícolas</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}