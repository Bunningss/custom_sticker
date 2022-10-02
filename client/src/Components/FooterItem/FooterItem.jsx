import './FooterItem.css';
import ListItem from '../ListItem/ListItem'

const FooterItem = ({ data }) => {
  return (
    <ul className='footer-item'>
      <h4 className="title">{data.title}</h4>
      {
        data.links.map((item, indx) => (
          <ListItem item={item}/>
        ))
      }
    </ul>
  )
}

export default FooterItem