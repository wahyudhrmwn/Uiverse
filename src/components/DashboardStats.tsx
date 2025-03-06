export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Total Components</div>
          <div className="stat-value">89</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
      
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Page Views</div>
          <div className="stat-value">2,345</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
      </div>

      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>

      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">New Users</div>
          <div className="stat-value">156</div>
          <div className="stat-desc">↗︎ 90 (45%)</div>
        </div>
      </div>
    </div>
  );
} 