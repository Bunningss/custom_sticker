import "./Sticker.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  sSticker,
  circleSize,
  squareSize,
  rectangleSize,
  sType,
  sMaterial,
  customSize,
  Scroller,
} from "../../static";
import { addProduct } from "../../Redux/cartRedux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import app from "../../firebase";
import CustomCard from "../../Components/CustomCard/CustomCard";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import Float from "../../Components/Float/Float";

const Sticker = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);

  const [sizeData, setSizeData] = useState([]);

  const [values, setValues] = useState({
    sticker: "",
    type: "",
    size: "",
    height: "",
    width: "",
    Quantity: "",
    material: "",
    artworkInstuction: "",
    artworkType: "",
    startPrice: 0.24,
    custom: true,
    _id: Math.random() * 10000 + 20000,
  });
  const [selected, setSelected] = useState("");

  const [file, setFile] = useState(null);

  // Update Size Selection Card
  useEffect(() => {
    if (selected === "circle") {
      setSizeData(circleSize);
    } else if (selected === "square") {
      setSizeData(squareSize);
    } else if (selected === "rectangle") {
      setSizeData(rectangleSize);
    } else if (selected === "custom") {
      setSizeData(customSize);
    }
  }, [selected]);

  // Reset selections on sticker change
  useEffect(() => {
    setValues({ ...values, ["height"]: "" });
    setValues({ ...values, ["width"]: "" });
    setValues({ ...values, ["size"]: "" });
    setValues({ ...values, ["Quantity"]: "" });
  }, [values.sticker]);

  // Reset quantity on size change
  useEffect(() => {
    setValues({ ...values, ["Quantity"]: "" });
  }, [values.size]);

  // Add to cart
  const handleClick = (e) => {
    e.preventDefault();
    setProcessing(true);

    // If artwork upload
    if (file) {
      // return if required values are not satisfied
      if (
        values.Quantity < 50 ||
        !values.artworkType ||
        !values.material ||
        !values.sticker ||
        !values.type
      ) {
        setProcessing(false);
        alert("Please Select all values");
        return;
      }
      if (
        values.Quantity > 50 &&
        values.artworkType &&
        values.material &&
        values.sticker &&
        values.type
      ) {
        // If sticker size not selected
        if (values.size === "") {
          if (values.height && values.width) {
            // Add to cart with custom size selected and upload file
            const filename = new Date().getTime() + file.name;
            const storage = getStorage(app);
            const storageRef = ref(storage, filename);

            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Progress " + progress);
                switch (snapshot.state) {
                  case "paused":
                    console.log("Upload paused.");
                    break;
                  case "running":
                    console.log("Upload running.");
                    break;
                  default:
                }
              },
              (error) => {
                setProcessing(false);
                alert("Something went wrong.");
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  dispatch(
                    addProduct({
                      serial: Math.random() * 10000 + 20000,
                      ...values,
                      artworkFile: downloadURL,
                      price: Number(
                        (values.Quantity * values.startPrice).toFixed(2)
                      ),
                    })
                  );
                  setProcessing(false);
                  navigate("/cart");
                });
              }
            );
          }
        } else if (values.size) {
          // File upload with default size
          const filename = new Date().getTime() + file.name;
          const storage = getStorage(app);
          const storageRef = ref(storage, filename);

          const uploadTask = uploadBytesResumable(storageRef, file);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Progress " + progress);
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload paused.");
                  break;
                case "running":
                  console.log("Upload running.");
                  break;
                default:
              }
            },
            (error) => {
              setProcessing(false);
              alert("Something went wrong.");
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                dispatch(
                  addProduct({
                    serial: Math.random() * 10000 + 20000,
                    ...values,
                    artworkFile: downloadURL,
                    price: Number(
                      (values.Quantity * values.startPrice).toFixed(2)
                    ),
                  })
                );
                setProcessing(false);
                navigate("/cart");
              });
            }
          );
        }
      }
    } else if (!file) {
      // Return if values are not satisfied
      // If no file upload
      if (
        values.Quantity < 50 ||
        !values.artworkInstuction ||
        !values.material ||
        !values.sticker ||
        !values.type
      ) {
        setProcessing(false);
        alert("Please select all the values.");
        return;
      }
      // if custom size
      if (
        values.Quantity > 50 &&
        values.artworkInstuction &&
        values.material &&
        values.sticker &&
        values.type
      ) {
        if (values.size === "") {
          if (values.height && values.width) {
            dispatch(
              addProduct({
                serial: Math.random() * 10000 + 20000,
                ...values,
                price: Number((values.Quantity * values.startPrice).toFixed(2)),
              })
            );
            setProcessing(false);
            navigate("/cart");
          }
        } else if (values.size) {
          // if default size
          dispatch(
            addProduct({
              serial: Math.random() * 10000 + 20000,
              ...values,
              price: Number((values.Quantity * values.startPrice).toFixed(2)),
            })
          );
          setProcessing(false);
          navigate("/cart");
        }
      }
    }
  };

  // Always load on page top
  Scroller();

  return (
    <form className="main-wrapper sticker default" onSubmit={handleClick}>
      <Float values={values} file={file} />
      <div className="content">
        {/* Select Sticker */}
        <section className="section-step">
          <div className="section-header">
            <h2 className="header">Select Sticker</h2>
          </div>
          <div className="section-content">
            {sSticker.map((s, indx) => (
              <CustomCard
                info={s}
                key={indx}
                values={values}
                setValues={setValues}
                active={selected === s.name}
                setActive={setSelected}
              />
            ))}
          </div>
        </section>
        {/* Select Sticker Type */}
        <section className="section-step">
          <div className="section-header">
            <h2 className="header">Select Sticker type</h2>
          </div>
          <div className="section-content">
            {sType.map((s, indx) => (
              <CustomCard
                info={s}
                key={indx}
                values={values}
                setValues={setValues}
                active={selected === s.name}
                setActive={setSelected}
              />
            ))}
          </div>
        </section>
        {/* Select Sticker Size */}
        <section className="section-step">
          <div className="section-header">
            <h2 className="header">Select Sticker size</h2>
          </div>
          <div className="section-content">
            {sizeData.map((s, indx) => (
              <CustomCard
                info={s}
                key={indx}
                values={values}
                setValues={setValues}
                active={selected === s.name}
                setActive={setSelected}
              />
            ))}
          </div>
        </section>
        {/* Select Material Type */}
        <section className="section-step">
          <div className="section-header">
            <h2 className="header">Select Sticker Material</h2>
          </div>
          <div className="section-content">
            {sMaterial.map((s, indx) => (
              <CustomCard
                info={s}
                key={indx}
                values={values}
                setValues={setValues}
                active={selected === s.name}
                setActive={setSelected}
              />
            ))}
          </div>
        </section>
      </div>
      <div className="artwork">
        <select
          name="artworkType"
          id=""
          className="input text-regular"
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
          required
        >
          <option value="">Select Artwork</option>
          <option value="instruction">Provide Instructions</option>
          <option value="upload">Upload Artwork</option>
        </select>
        {values.artworkType === "instruction" && (
          <textarea
            required
            name="artworkInstuction"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
            className="input text-regular"
            id=""
            cols="30"
            rows="10"
            placeholder="Provide artwork instructions"
          ></textarea>
        )}
        {values.artworkType === "upload" && (
          <input
            required
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="input text-regular"
          />
        )}
      </div>
      <p className="warning error-message text-small">{error}</p>
      <PrimaryButton text={processing ? "processing..." : "Add to cart"} />
    </form>
  );
};

export default Sticker;
