import "./DatePicker.css";

const DatePicker = () => {
  let intwentyTwo = new Date(
    Date.now() + 21 * 24 * 60 * 60 * 1000
  ).toDateString();
  let inSix = new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toDateString();

  // Buss
  const getBusinessDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const current = new Date(startDate);
    const dates = [];

    while (current <= end) {
      if (current.getDay() !== 6 && current.getDay() !== 0) {
        dates.push(new Date(current).toDateString());
      }

      current.setDate(current.getDate() + 1);
    }

    return dates;
  };

  const businessDays = getBusinessDays(inSix, intwentyTwo);

  console.log(businessDays);
  return (
    <div className="date-picker">
      <div className="wrapper">
        {businessDays.map((date, indx) => (
          <div className="date">
            <div className="row">{date}</div>
            <div className="row">{indx === 0 ? 32 : 44}$</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatePicker;
