import { NavLink } from "react-router";
import {
    LayoutDashboard,
    Users,
    User,
    CirclePlus,
    Settings,
    Kanban,
    LogOut,
} from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvieder";

const Sidebar = () => {
    const { role } = useContext(AuthContext);

    const menu = [
        { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },


        ...(role === "donor"
            ? [{ name: "Add Request", icon: CirclePlus, path: "/dashboard/add-request" }]
            : []),

        { name: "Manage Product", icon: Kanban, path: "/dashboard/manage-product" },
        { name: "All Users", icon: Users, path: "/dashboard/all-users" },
        { name: "User", icon: User, path: "/admin/users" },
    ];

    return (
        <aside className="w-64 h-screen bg-slate-900 text-slate-200 flex flex-col fixed">
            {/* Logo */}
            <div className="h-16 flex items-center justify-center border-b border-slate-700">
                <h1 className="text-xl font-bold text-sky-400">AdminPanel</h1>
            </div>

            {/* Menu */}
            <nav className="flex-1 px-2 py-4 space-y-1">
                {menu.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-lg transition
                            ${isActive
                                ? "bg-sky-400 text-slate-900 font-semibold"
                                : "hover:bg-slate-800"
                            }`
                        }
                    >
                        <item.icon size={20} />
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </nav>

            {/* Footer */}
            <div className="border-t border-slate-700 p-2 space-y-1">
                <NavLink
                    to="/admin/settings"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800"
                >
                    <Settings size={20} />
                    <span>Settings</span>
                </NavLink>

                <button className="flex w-full items-center gap-3 px-4 py-2 rounded-lg text-red-400 hover:bg-red-500 hover:text-white transition">
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
