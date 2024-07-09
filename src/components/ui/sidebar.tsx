import { MdOutlineEco, MdOutlineSpaceDashboard } from 'react-icons/md';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { RiUser3Line, RiUserShared2Line } from 'react-icons/ri';
import { useAuth } from '../../modules/user/hooks/auth-context.hook';

export function Sidebar() {
    const { signOut, email } = useAuth();

    return (
        <aside id="sidebar" className="h-full min-w-64 w-64 transition-transform" aria-label="Sidebar">
            <div className="flex h-full flex-col overflow-y-auto border-r border-slate-200 bg-white px-3 py-4 dark:border-slate-700 dark:bg-slate-900 fixed w-64">
                <div className="mb-10 flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white">
                    <img src={logo} alt="agriprecision" />
                </div>
                <div className="flex items-center space-x-2 mb-4 text-sm text-gray-500">
                    <RiUser3Line />
                    <p>{email}</p>
                </div>
                <ul className="space-y-2 text-sm font-medium">
                    <li>
                        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'flex items-center rounded-lg px-3 py-2 bg-slate-100 text-green-700' : 'flex items-center rounded-lg px-3 py-2 text-slate-900 hover:text-green-700 dark:text-white dark:hover:bg-slate-700')}>
                            <MdOutlineSpaceDashboard className="text-xl" />
                            <span className="ml-3 flex-1 whitespace-nowrap">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to={'/fields'} className={({ isActive }) => (isActive ? 'flex items-center rounded-lg px-3 py-2 bg-slate-100 text-green-700' : 'flex items-center rounded-lg px-3 py-2 text-slate-900 hover:text-green-700 dark:text-white dark:hover:bg-slate-700')}>
                            <MdOutlineEco className="text-xl" />
                            <span className="ml-3 flex-1 whitespace-nowrap">Talhões</span>
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={() => signOut()} className={'cursor-pointer flex items-center rounded-lg px-3 py-2 text-slate-900 hover:text-red-700 dark:text-white dark:hover:bg-slate-700'}>
                            <RiUserShared2Line className="text-xl" />
                            <span className="ml-3 flex-1 whitespace-nowrap">Sair</span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    );
}