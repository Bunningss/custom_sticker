import "./SelectMenu.css";

const Select_Menu = ({ item, values, setValues }) => {
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="select-wrapper">
      <label className="text-regular label" htmlFor="select">
        {item.label}
      </label>
      <select
        name={item.value}
        id=""
        required
        className="select text-regular"
        onInvalid={(e) => e.target.setCustomValidity(`${item.tooltip}`)}
        onInput={(e) => e.target.setCustomValidity("")}
        onChange={handleChange}
      >
        {item.opts.map((opt, indx) => (
          <option value={opt.value} key={indx}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select_Menu;
