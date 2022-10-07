import './Float.css';

const Float = ({ values }) => {
  return (
    <div className='float'>
        <h6 className="float-text">Sticker: <span>{values.sticker}</span> </h6>
        <h6 className="float-text">type: <span>{values.type}</span> </h6>
        <h6 className="float-text">Size: <span>{values.size}</span> </h6>
        <h6 className="float-text">Material: <span>{values.material}</span> </h6>
        <h6 className="float-text">Art: <span>{values.art ? "Uploaded" : "Unavailable"}</span> </h6>
    </div>
  )
}

export default Float