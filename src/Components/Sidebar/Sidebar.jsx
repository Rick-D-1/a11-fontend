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
import { signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

const Sidebar = () => {
    const { role } = useContext(AuthContext);

    const handleLogOut = () => {
        signOut(auth)
    }


    const menu = [
        { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },


        ...(role === "donor"
            ? [{ name: "Add Request", icon: CirclePlus, path: "add-request" }]
            : []),

        { name: "My Request", icon: Kanban, path: "/dashboard/my-request" },


        ...(role === "admin"
            ? [{ name: "All Users", icon: Users, path: "/dashboard/all-users" }]
            : []),


    ];

    return (
        <aside className="w-64 h-screen bg-red-600 text-slate-200 flex flex-col fixed">
            {/* Logo */}
            <div className="h-16 flex items-center justify-center border-b border-slate-700">
                <h1 className="text-xl font-bold text-white">AdminPanel</h1>
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
                                ? "bg-white text-red-600 font-semibold"
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


                <button onClick={handleLogOut} className="flex w-full items-center gap-3 px-4 py-2 rounded-lg text-white hover:bg-red-500 hover:text-white transition">
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
