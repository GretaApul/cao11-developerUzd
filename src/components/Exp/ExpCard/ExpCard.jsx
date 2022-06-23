function ExpCard({ startYear, finishYear, companyName, position, description }) {
  return (
    <>
      <div className="first-block">
        <h4 className="year">
          {startYear} - {finishYear}
        </h4>
        <h5 className="company">{companyName}</h5>
      </div>
      <div className="second-block">
        <h4 className="position">{position}</h4>
        <p className="description">{description}</p>
      </div>
    </>
  );
}

export default ExpCard;
