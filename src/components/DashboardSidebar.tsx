'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBox, FiHeart, FiSettings, FiUsers } from "react-icons/fi";
import { LuLayoutTemplate } from "react-icons/lu";

export default function DashboardSidebar() {
  const pathname = usePathname();

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
            <Link 
              href="/template" 
              className={`flex items-center gap-2 text-white ${
                pathname === '/template' ? 'bg-primary' : ''
              }`}
            >
              <LuLayoutTemplate /> Template
            </Link>
          </li>
          <li>
            <Link 
              href="/components"
              className={`flex items-center gap-2 text-white ${
                pathname === '/components' ? 'bg-primary' : ''
              }`}
            >
              <FiBox /> Components
            </Link>
          </li>
          <li>
            <Link 
              href="/favorites"
              className={`flex items-center gap-2 text-white ${
                pathname === '/favorites' ? 'bg-primary' : ''
              }`}
            >
              <FiHeart /> Favorites
            </Link>
          </li>
          <li>
            <Link 
              href="/community"
              className={`flex items-center gap-2 text-white ${
                pathname === '/community' ? 'bg-primary' : ''
              }`}
            >
              <FiUsers /> Community
            </Link>
          </li>
          <li>
            <Link 
              href="/settings"
              className={`flex items-center gap-2 text-white ${
                pathname === '/settings' ? 'bg-primary' : ''
              }`}
            >
              <FiSettings /> Settings
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}
