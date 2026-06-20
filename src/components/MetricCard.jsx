function MetricCard({ label, value, description, tone = "neutral" }) {
  return (
    <article className={`metric-card metric-card-${tone}`}>
      <span className="metric-label">{label}</span>
      <strong className="metric-value">{value}</strong>
      {description ? <p className="metric-description">{description}</p> : null}
    </article>
  );
}

export default MetricCard;