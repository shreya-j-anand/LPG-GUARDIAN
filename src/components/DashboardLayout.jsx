import { useState } from "react";

function DashboardLayout({
  brand,
  title,
  subtitle,
  navItems,
  activeView,
  onViewChange,
  topbarAction,
  sidebarFooter,
  children,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const brandInitials =
    brand
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "LG";

  function handleViewChange(viewId) {
    onViewChange(viewId);
    setSidebarOpen(false);
  }

  return (
    <div className="dashboard-shell">
      <button
  type="button"
  className="command-button"
  onClick={() => setSidebarOpen(!sidebarOpen)}
  aria-label="Toggle Navigation"
>
  ⚙
</button>
      <button
        type="button"
        className={`sidebar-backdrop ${sidebarOpen ? "is-open" : ""}`}
        onClick={() => setSidebarOpen(false)}
        aria-label="Close navigation"
      />

      <aside className={`dashboard-sidebar ${sidebarOpen ? "is-open" : ""}`}>
        <div className="dashboard-brand">
          <span className="brand-mark">{brandInitials}</span>
          <div>
            <p className="brand-label">{brand}</p>
            <p className="brand-note">Operations workspace</p>
          </div>
        </div>

        <nav className="dashboard-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-item ${activeView === item.id ? "is-active" : ""}`}
              onClick={() => handleViewChange(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-copy">
                <strong>{item.label}</strong>
                <small>{item.description}</small>
              </span>
            </button>
          ))}
        </nav>

        {sidebarFooter ? (
          <div className="dashboard-sidebar-footer">{sidebarFooter}</div>
        ) : null}
      </aside>

      <div className="dashboard-main">
        <header className="dashboard-topbar">
          <div className="dashboard-topbar-group">

            <div>
              <p className="eyebrow">{brand}</p>
              <h1 className="dashboard-title">{title}</h1>
              <p className="dashboard-subtitle">{subtitle}</p>
            </div>
          </div>

          {topbarAction ? (
            <div className="dashboard-topbar-action">{topbarAction}</div>
          ) : null}
        </header>

        <main className="dashboard-content">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;