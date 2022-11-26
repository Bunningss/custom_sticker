import "./Modal.css";
import close from "../../assets/icons/close.png";

const Modal = ({ modalImg, setModalImg }) => {
  const toggleModal = (e) => {
    if (e.target.className !== "modal-img") {
      setModalImg(null);
    }
  };
  return (
    <div className="modal" onClick={toggleModal}>
      <div className="wrapper">
        <img className="icon-small" src={close} alt="" />
        <img className="modal-img" src={modalImg} alt="" />
      </div>
    </div>
  );
};

export default Modal;
