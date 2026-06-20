import { useState } from "react";
import "./App.css";
import ConsumerLogin from "./pages/ConsumerLogin";
import ConsumerRegister from "./pages/ConsumerRegister";
import ConsumerPortal from "./pages/ConsumerPortal";
import DistributorLogin from "./pages/DistributorLogin";
import DistributorPortal from "./pages/DistributorPortal";
import GovernmentDashboard from "./pages/GovernmentDashboard";
import GovernmentLogin from "./pages/GovernmentLogin";

function App() {
  const [page, setPage] = useState("home");
  const consumerId = localStorage.getItem("consumerId");
  const distributorId = localStorage.getItem("distributorId");
  const governmentUser = localStorage.getItem("governmentUser");
  if (consumerId) {
  return <ConsumerPortal />;
}

if (distributorId) {
  return <DistributorPortal />;
}
if (governmentUser) {
  return <GovernmentDashboard />;
}
  if (page === "consumerLogin") {
    return <ConsumerLogin setPage={setPage} />;
  }

  if (page === "consumerRegister") {
    return <ConsumerRegister setPage={setPage} />;
  }

  if (page === "distributorLogin") {
  return (
    <DistributorLogin
  onBackToHome={() => setPage("home")}
  setPage={setPage}
    />
  );
}
if (page === "governmentLogin") {
  return <GovernmentLogin setPage={setPage} />;
}
if (page === "government") {
  return <GovernmentDashboard />;
}

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #071426 0%, #081a34 50%, #071426 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        color: "white",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "700px",
        }}
      >
        <p
          style={{
            color: "#00E08A",
            letterSpacing: "4px",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          LPG MANAGEMENT SYSTEM
        </p>

        <h1
          style={{
            fontSize: "72px",
            margin: "0",
            fontWeight: "800",
            lineHeight: "1",
          }}
        >
          LPG GUARDIAN
        </h1>

        <p
          style={{
            marginTop: "24px",
            fontSize: "20px",
            color: "#A7B0C0",
            lineHeight: "1.6",
          }}
        >
          Book refills, track requests, and manage distributor operations
          from a single platform.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setPage("consumerLogin")}
            style={{
              padding: "16px 32px",
              borderRadius: "999px",
              border: "none",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              fontWeight: "700",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Consumer Login
          </button>

          <button
            onClick={() => setPage("distributorLogin")}
            style={{
              padding: "16px 32px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              fontWeight: "700",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Distributor Login
          </button>
          <button
  className="secondary-button"
  onClick={() => setPage("governmentLogin")}
>
  Government Portal
</button>
        </div>
      </div>
    </div>
  );
}

export default App;