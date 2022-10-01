import './Hamburger.css';

const Hamburger = ({ active, setActive }) => {
  return (
    <div className={active ? 'hamburger active' : 'hamburger'} onClick={() => setActive(!active)}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
    </div>
  )
}

export default Hamburger