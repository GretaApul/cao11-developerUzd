import { useEffect, useState } from 'react';
import { getFetchData } from '../../helper/helper';
import SkillsCard from '../SkillsCard/SkillsCard';

function SkillsCardList() {
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    getFetchData('https://zany-skitter-caper.glitch.me/skills', setDataArr);
  }, []);

  return (
    <div>
      {dataArr.map((ob) => (
        <SkillsCard title={ob.title} level={ob.level} />
      ))}
    </div>
  );
}

export default SkillsCardList;
