import { useEffect, useState } from 'react';
import { getFetchData } from '../../helper/helper';
import ExpCard from '../ExpCard/ExpCard';

function ExpCardList() {
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    getFetchData('https://zany-skitter-caper.glitch.me/experiences', setDataArr);
  }, []);

  return (
    <>
      {dataArr.map((ob) => (
        <div className="cia-flex">
          <ExpCard
            startYear={ob.startYear}
            finishYear={ob.finishYear}
            companyName={ob.companyName}
            position={ob.position}
            description={ob.description}
          />
        </div>
      ))}
    </>
  );
}

export default ExpCardList;
