'use client'

import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/ThemeToggle";
import { usePathname } from 'next/navigation'

interface DashboardNavbarProps {
  userName?: string | null;
}

export default function DashboardNavbar({ userName }: DashboardNavbarProps) {
  const pathname = usePathname();
  
  const getPageTitle = () => {
    const segments = pathname.split('/').filter(Boolean);
    return segments.map(segment => 
      segment.charAt(0).toUpperCase() + segment.slice(1)
    ).join(' ');
  };

  return (
    <div className="navbar bg-base-100 border-b px-4">
      <div className="flex-1 gap-4">
        <div className="lg:hidden">
          <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost drawer-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold capitalize">{getPageTitle()}</h1>
          <div className="badge badge-primary">Beta</div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="items-center justify-center content-center gap-3 mr-2">
          <div className="text-sm text-gray-500">
            Welcome back, <span className="font-medium text-base-content">{userName}</span>
          </div>
        </div>
        <ThemeToggle />
        <div className="px-3 items-center justify-center content-center pt-2">
          <UserButton 
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "w-10 h-10"
              }
            }} 
          />
        </div>
      </div>
    </div>
  );
} 