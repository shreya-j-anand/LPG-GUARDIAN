function SectionCard({
  eyebrow,
  title,
  description,
  actions,
  children,
  compact = false,
}) {
  return (
    <section className={`section-card ${compact ? "section-card-compact" : ""}`}>
      <div className="section-card-header">
        <div>
          {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
          <h2 className="section-title">{title}</h2>
          {description ? <p className="section-description">{description}</p> : null}
        </div>

        {actions ? <div className="section-actions">{actions}</div> : null}
      </div>

      {children}
    </section>
  );
}

export default SectionCard;