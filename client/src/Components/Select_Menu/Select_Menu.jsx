import './Select_Menu.css';

const Select_Menu = ({ item }) => {
  return (
    <div className='select-wrapper'>
      <label className='text-regular label' htmlFor="select">{item.label}</label>
      <select name="select" id="" required className='select text-regular'>
        {
          item.opts.map((opt, indx) => (
            <option value={opt.value} key={indx}>{opt.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Select_Menu