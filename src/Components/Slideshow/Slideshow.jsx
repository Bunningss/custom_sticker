import "./Slideshow.css";

const Slideshow = ({ setModalImg, images }) => {
  return (
    <div className="slideshow">
      {/* {images &&
        images.map((img, indx) => (
          <img
            className="slideshow-img"
            src={img}
            alt=""
            key={indx}
            onClick={() => setModalImg(img)}
            loading="lazy"
          />
        ))} */}
      {
        <img
          className="slideshow-img"
          src={images}
          alt=""
          onClick={() => setModalImg(images)}
          loading="lazy"
        />
      }
    </div>
  );
};

export default Slideshow;
