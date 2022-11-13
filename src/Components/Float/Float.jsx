import './Float.css';

const Float = ({ values, file }) => {
  return (
    <div className='float'>
        <h6 className="float-text">Sticker: <span>{values.sticker}</span> </h6>
        <h6 className="float-text">type: <span>{values.type}</span> </h6>
          {
            values.height &&
            <h6 className="float-text">
              Size: <span>{values.height} x {values.width}</span>
            </h6>
          }
          {
            values.size &&
            <h6 className="float-text">
              Size: <span>{values.size}</span> 
            </h6>
          }
        <h6 className='float-text'>
          Quantity: <span>{values.Quantity}</span>
        </h6>
        <h6 className="float-text">Material: <span>{values.material}</span> </h6>
        <h6 className="float-text">Art: <span>{file ? "Selected" : "No File Selected"}</span> </h6>
    </div>
  )
}

export default Float