import Link from "next/link";
import { 
  FiHome, 
  FiBox, 
  FiHeart, 
  FiSettings, 
  FiUsers 
} from "react-icons/fi";

export default function DashboardSidebar() {
  return (
    <div className="drawer-side">
      <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
      <aside className="bg-base-100 w-64 min-h-full">
        <div className="p-4">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Uiverse
          </Link>
        </div>
        <ul className="menu p-4 text-base-content w-full">
          <li>
            <Link href="/dashboard" className="flex items-center gap-2">
              <FiHome /> Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard/components" className="flex items-center gap-2">
              <FiBox /> Components
            </Link>
          </li>
          <li>
            <Link href="/dashboard/favorites" className="flex items-center gap-2">
              <FiHeart /> Favorites
            </Link>
          </li>
          <li>
            <Link href="/dashboard/community" className="flex items-center gap-2">
              <FiUsers /> Community
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings" className="flex items-center gap-2">
              <FiSettings /> Settings
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
} 