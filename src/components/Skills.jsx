import SkillsCardList from './Skills/SkillsCardList/SkillsCardList';
import ExpCardList from './Exp/ExpCardList/ExpCardList';

function Skills() {
  return (
    <div className="white-conatiner">
      <h2 className="exp">Experience</h2>
      <div className="flex-block">
        <ExpCardList />
      </div>

      <div className="coding-block">
        <h2 className="coding">
          Coding <span>Skills</span>
        </h2>

        <div className="skill-container">
          <SkillsCardList />
        </div>
      </div>
    </div>
  );
}

export default Skills;
