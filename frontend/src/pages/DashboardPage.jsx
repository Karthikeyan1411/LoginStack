export default function DashboardPage({ user, onLogout }) {
  return (
    <main className="dashboard-layout">
      <header className="dashboard-header">
        <div>
          <p className="dashboard-subtitle">Signed in as</p>
          <h1 className="dashboard-title">{user?.username}</h1>
        </div>
        <button className="button button--ghost" onClick={onLogout}>
          Log out
        </button>
      </header>

      <section className="card">
        <h2>Your Summary</h2>
        <div className="stat-grid">
          <article className="stat-card">
            <p className="stat-label">Salary</p>
            <p className="stat-value">
              {Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                maximumFractionDigits: 0,
              }).format(user?.salary ?? 0)}
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}