import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardNavbar from "@/components/DashboardNavbar";
import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  return (
    <div className="min-h-screen bg-base-200">
      <DashboardNavbar userName={user?.fullName} />

      {/* Dashboard Layout */}
      <div className="drawer lg:drawer-open">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-6">
          {/* Main Content */}
          {children}
        </div>
        <DashboardSidebar />
      </div>
    </div>
  );
} 