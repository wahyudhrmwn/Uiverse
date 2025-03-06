import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/ThemeToggle";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardStats from "@/components/DashboardStats";
import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar */}
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
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="badge badge-primary">Beta</div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="items-center justify-center content-center gap-3 mr-2 ">
            <div className="text-sm text-gray-500">
              Welcome back, <span className="font-medium text-base-content">{user?.fullName}</span>
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

      {/* Dashboard Layout */}
      <div className="drawer lg:drawer-open">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-6">
          {/* Main Content */}
          <div className="space-y-6">
            <DashboardStats />
            
            {/* Recent Activity */}
            <div className="bg-base-100 rounded-box p-6">
              <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Component</td>
                      <td>Created new button component</td>
                      <td>2024-01-20</td>
                      <td><div className="badge badge-success">Published</div></td>
                    </tr>
                    <tr>
                      <td>Layout</td>
                      <td>Updated dashboard layout</td>
                      <td>2024-01-19</td>
                      <td><div className="badge badge-warning">Draft</div></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <DashboardSidebar />
      </div>
    </div>
  );
} 