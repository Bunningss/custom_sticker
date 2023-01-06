import "./DatePicker.css";

const DatePicker = ({
  date,
  indx,
  selectedDate,
  setSelectedDate,
  setFreight,
  setDeliveryDate,
}) => {
  const handleSelection = () => {
    setSelectedDate(date);
    setDeliveryDate(date);
    setFreight(
      indx === 0
        ? 50
        : indx === 1
        ? 40
        : indx === 2
        ? 32
        : indx === 3
        ? 25
        : indx === 4
        ? 20
        : indx === 5
        ? 17
        : indx === 6
        ? 14
        : indx === 7
        ? 11
        : 0
    );
  };

  return (
    <div
      className={selectedDate ? "date selected" : "date"}
      onClick={handleSelection}
    >
      <div className="row">{date}</div>
      <div className="row">
        $
        {indx === 0
          ? 50
          : indx === 1
          ? 40
          : indx === 2
          ? 32
          : indx === 3
          ? 25
          : indx === 4
          ? 20
          : indx === 5
          ? 17
          : indx === 6
          ? 14
          : indx === 7
          ? 11
          : 0}
      </div>
    </div>
  );
};

export default DatePicker;
