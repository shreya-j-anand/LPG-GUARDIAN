function StatusBadge({ status }) {
  const normalized = (status || "").toLowerCase();

  let tone = "neutral";

  if (normalized.includes("pending")) {
    tone = "warning";
  } else if (normalized.includes("approved") || normalized.includes("active")) {
    tone = "success";
  } else if (normalized.includes("rejected") || normalized.includes("failed")) {
    tone = "danger";
  } else if (normalized.includes("dispatch") || normalized.includes("out for delivery")) {
    tone = "info";
  }

  return <span className={`status-badge status-${tone}`}>{status}</span>;
}

export default StatusBadge;