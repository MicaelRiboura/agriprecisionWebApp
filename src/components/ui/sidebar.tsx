import { MdOutlineAllInbox, MdOutlineEco, MdOutlineHistory, MdOutlineSpaceDashboard } from 'react-icons/md';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

export function Sidebar() {
    return (
        <aside id="sidebar" className="h-full min-w-64 w-64 transition-transform" aria-label="Sidebar">
            <div className="flex h-full flex-col overflow-y-auto border-r border-slate-200 bg-white px-3 py-4 dark:border-slate-700 dark:bg-slate-900 fixed w-64">
                <div className="mb-10 flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white">
                    <img src={logo} />
                </div>
                <ul className="space-y-2 text-sm font-medium">
                    <li >
                        <NavLink to={'/'} className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 hover:text-green-700 dark:text-white dark:hover:bg-slate-700">
                            <MdOutlineSpaceDashboard className="text-xl" />
                            <span className="ml-3 flex-1 whitespace-nowrap">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to={'/fields'} className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 hover:text-green-700 dark:text-white dark:hover:bg-slate-700">
                            <MdOutlineEco className="text-xl" />
                            <span className="ml-3 flex-1 whitespace-nowrap">Talhões</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to={'/agro-inputs'} className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 hover:text-green-700 dark:text-white dark:hover:bg-slate-700">
                            <MdOutlineAllInbox className="text-xl" />
                            <span className="ml-3 flex-1 whitespace-nowrap">Insumos agrícolas</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to={'/harvest-history'} className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 hover:text-green-700 dark:text-white dark:hover:bg-slate-700">
                            <MdOutlineHistory className="text-xl" />
                            <span className="ml-3 flex-1 whitespace-nowrap">Histórico de Colheitas</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    );
}