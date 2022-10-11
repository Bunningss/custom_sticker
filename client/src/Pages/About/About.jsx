import './About.css';
import { Scroller } from '../../static';

const About = () => {

  // Always load page on top
  Scroller()
  return (
    <div className='about main-wrapper default'>
      <div className="wrapper">
          <p className="text-regular details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque commodi, autem doloremque, vitae voluptates eius numquam voluptatum enim nihil ipsum tempora velit sit accusantium voluptas odio iste tempore. Ex reiciendis reprehenderit odit. Asperiores reiciendis, nam ullam repudiandae pariatur laborum, sequi consequuntur non ea maxime possimus inventore in molestias assumenda fugiat.
          </p>
          <p className="text-regular details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque commodi, autem doloremque, vitae voluptates eius numquam voluptatum enim nihil ipsum tempora velit sit accusantium voluptas odio iste tempore. Ex reiciendis reprehenderit odit. Asperiores reiciendis, nam ullam repudiandae pariatur laborum, sequi consequuntur non ea maxime possimus inventore in molestias assumenda fugiat.
          </p>
          <p className="text-regular details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque commodi, autem doloremque, vitae voluptates eius numquam voluptatum enim nihil ipsum tempora velit sit accusantium voluptas odio iste tempore. Ex reiciendis reprehenderit odit. Asperiores reiciendis, nam ullam repudiandae pariatur laborum, sequi consequuntur non ea maxime possimus inventore in molestias assumenda fugiat.
          </p>
      </div>
    </div>
  )
}

export default About