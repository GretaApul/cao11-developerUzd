function SkillsCard({ level, title }) {
  return (
    <div>
      <div className="skill-flex">
        <p className="skill-title">{title}</p>
        <p className="skill-proc">{level}%</p>
      </div>
      <div className="skill-border">
        <div className="skill-level" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
}

export default SkillsCard;
