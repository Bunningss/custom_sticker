import "./Product.css";
import { useState, useEffect } from "react";
import { custom, Scroller } from "../../static";
import { publicReq } from "../../Utilities/requestMethods";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/cartRedux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import Slideshow from "../../Components/Slideshow/Slideshow";
import Modal from "../../Components/Modal/Modal";
import SelectMenu from "../../Components/SelectMenu/SelectMenu";
import HeaderPrimary from "../../Components/HeaderPrimary/HeaderPrimary";
import DatePicker from "../../Components/DatePicker/DatePicker";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState("");
  const [freight, setFreight] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [product, setProduct] = useState({});
  const [modalImg, setModalImg] = useState(null);
  const [values, setValues] = useState({
    Quantity: "",
    StickerType: "",
    StickerSize: "",
    ImprintColors: "",
    ArtworkType: "",
    ArtworkInstruction: "",
    DeliveryDate: deliveryDate,
  });

  const headers = {
    small: "details",
    large: "product information",
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Reset artwork file and instruction on artwork type change
  useEffect(() => {
    setFile(null);
    setValues({ ...values, ["ArtworkInstruction"]: "" });
  }, [values.ArtworkType]);

  const id = useLocation().pathname?.split("/")[3];

  // Fetch product from server
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicReq.get(`/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getProduct();
  }, [id]);

  // Date
  let intwentyTwo = new Date(
    Date.now() + 21 * 24 * 60 * 60 * 1000
  ).toDateString();
  let inSix = new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toDateString();

  // Buss
  const getBusinessDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const current = new Date(startDate);
    const dates = [];

    while (current <= end) {
      if (current.getDay() !== 6 && current.getDay() !== 0) {
        dates.push(new Date(current).toDateString());
      }

      current.setDate(current.getDate() + 1);
    }

    return dates;
  };

  const businessDays = getBusinessDays(inSix, intwentyTwo);

  // Price calculator
  const calculatePrice = () => {
    if (values.StickerSize === "") {
      return;
    }
    if (values.StickerSize === "2inx2in") {
      if (values.Quantity > 0 && values.Quantity <= 10) {
        return Number(values.Quantity * product.twoQ_10).toFixed(2);
      } else if (values.Quantity > 10 && values.Quantity <= 50) {
        return Number(values.Quantity * product.twoQ_50).toFixed(2);
      } else if (values.Quantity > 50 && values.Quantity <= 100) {
        return Number(values.Quantity * product.twoQ_100).toFixed(2);
      } else if (values.Quantity > 100 && values.Quantity <= 200) {
        return Number(values.Quantity * product.twoQ_200).toFixed(2);
      } else if (values.Quantity > 200 && values.Quantity <= 300) {
        return Number(values.Quantity * product.twoQ_300).toFixed(2);
      } else if (values.Quantity > 300 && values.Quantity <= 500) {
        return Number(values.Quantity * product.twoQ_500).toFixed(2);
      } else if (values.Quantity > 500 && values.Quantity <= 1000) {
        return Number(values.Quantity * product.twoQ_1000).toFixed(2);
      } else if (values.Quantity > 1000 && values.Quantity <= 2000) {
        return Number(values.Quantity * product.twoQ_2000).toFixed(2);
      } else if (values.Quantity > 2000 && values.Quantity <= 3000) {
        return Number(values.Quantity * product.twoQ_3000).toFixed(2);
      } else if (values.Quantity > 3000 && values.Quantity <= 5000) {
        return Number(values.Quantity * product.twoQ_5000).toFixed(2);
      } else if (values.Quantity > 5000 && values.Quantity <= 10000) {
        return Number(values.Quantity * product.twoQ_10000).toFixed(2);
      }
    } else if (values.StickerSize === "3inx3in") {
      if (values.Quantity > 0 && values.Quantity <= 10) {
        return Number(values.Quantity * product.threeQ_10).toFixed(2);
      } else if (values.Quantity > 10 && values.Quantity <= 50) {
        return Number(values.Quantity * product.threeQ_50).toFixed(2);
      } else if (values.Quantity > 50 && values.Quantity <= 100) {
        return Number(values.Quantity * product.threeQ_100).toFixed(2);
      } else if (values.Quantity > 100 && values.Quantity <= 200) {
        return Number(values.Quantity * product.threeQ_200).toFixed(2);
      } else if (values.Quantity > 200 && values.Quantity <= 300) {
        return Number(values.Quantity * product.threeQ_300).toFixed(2);
      } else if (values.Quantity > 300 && values.Quantity <= 500) {
        return Number(values.Quantity * product.threeQ_500).toFixed(2);
      } else if (values.Quantity > 500 && values.Quantity <= 1000) {
        return Number(values.Quantity * product.threeQ_1000).toFixed(2);
      } else if (values.Quantity > 1000 && values.Quantity <= 2000) {
        return Number(values.Quantity * product.threeQ_2000).toFixed(2);
      } else if (values.Quantity > 2000 && values.Quantity <= 3000) {
        return Number(values.Quantity * product.threeQ_3000).toFixed(2);
      } else if (values.Quantity > 3000 && values.Quantity <= 5000) {
        return Number(values.Quantity * product.threeQ_5000).toFixed(2);
      } else if (values.Quantity > 5000 && values.Quantity <= 10000) {
        return Number(values.Quantity * product.threeQ_10000).toFixed(2);
      }
    } else if (values.StickerSize === "4inx4in") {
      if (values.Quantity > 0 && values.Quantity <= 10) {
        return Number(values.Quantity * product.fourQ_10).toFixed(2);
      } else if (values.Quantity > 10 && values.Quantity <= 50) {
        return Number(values.Quantity * product.fourQ_50).toFixed(2);
      } else if (values.Quantity > 50 && values.Quantity <= 100) {
        return Number(values.Quantity * product.fourQ_100).toFixed(2);
      } else if (values.Quantity > 100 && values.Quantity <= 200) {
        return Number(values.Quantity * product.fourQ_200).toFixed(2);
      } else if (values.Quantity > 200 && values.Quantity <= 300) {
        return Number(values.Quantity * product.fourQ_300).toFixed(2);
      } else if (values.Quantity > 300 && values.Quantity <= 500) {
        return Number(values.Quantity * product.fourQ_500).toFixed(2);
      } else if (values.Quantity > 500 && values.Quantity <= 1000) {
        return Number(values.Quantity * product.fourQ_1000).toFixed(2);
      } else if (values.Quantity > 1000 && values.Quantity <= 2000) {
        return Number(values.Quantity * product.fourQ_2000).toFixed(2);
      } else if (values.Quantity > 2000 && values.Quantity <= 3000) {
        return Number(values.Quantity * product.fourQ_3000).toFixed(2);
      } else if (values.Quantity > 3000 && values.Quantity <= 5000) {
        return Number(values.Quantity * product.fourQ_5000).toFixed(2);
      } else if (values.Quantity > 5000 && values.Quantity <= 10000) {
        return Number(values.Quantity * product.fourQ_10000).toFixed(2);
      }
    } else if (values.StickerSize === "5inx5in") {
      if (values.Quantity > 0 && values.Quantity <= 10) {
        return Number(values.Quantity * product.fiveQ_10).toFixed(2);
      } else if (values.Quantity > 10 && values.Quantity <= 50) {
        return Number(values.Quantity * product.fiveQ_50).toFixed(2);
      } else if (values.Quantity > 50 && values.Quantity <= 100) {
        return Number(values.Quantity * product.fiveQ_100).toFixed(2);
      } else if (values.Quantity > 100 && values.Quantity <= 200) {
        return Number(values.Quantity * product.fiveQ_200).toFixed(2);
      } else if (values.Quantity > 200 && values.Quantity <= 300) {
        return Number(values.Quantity * product.fiveQ_300).toFixed(2);
      } else if (values.Quantity > 300 && values.Quantity <= 500) {
        return Number(values.Quantity * product.fiveQ_500).toFixed(2);
      } else if (values.Quantity > 500 && values.Quantity <= 1000) {
        return Number(values.Quantity * product.fiveQ_1000).toFixed(2);
      } else if (values.Quantity > 1000 && values.Quantity <= 2000) {
        return Number(values.Quantity * product.fiveQ_2000).toFixed(2);
      } else if (values.Quantity > 2000 && values.Quantity <= 3000) {
        return Number(values.Quantity * product.fiveQ_3000).toFixed(2);
      } else if (values.Quantity > 3000 && values.Quantity <= 5000) {
        return Number(values.Quantity * product.fiveQ_5000).toFixed(2);
      } else if (values.Quantity > 5000 && values.Quantity <= 10000) {
        return Number(values.Quantity * product.fiveQ_10000).toFixed(2);
      }
    }
  };

  useEffect(() => {
    setPrice(calculatePrice());
  }, [values.Quantity, values.StickerSize]);

  // Add to cart
  const handleClick = (e) => {
    e.preventDefault();
    setProcessing(true);
    if (freight === null) return;

    //  Firebase Upload
    if (file) {
      if (
        values.Quantity < 10 ||
        !values.StickerType ||
        !values.StickerSize ||
        !values.ImprintColors
      ) {
        setProcessing(false);
        alert("Please select all values.");
        return;
      }
      const filename = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, filename);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          setProcessing(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            //  Add to cart logic
            dispatch(
              addProduct({
                serial: Math.random() * 10000 + 20000,
                ...product,
                ...values,
                ArtworkFile: downloadURL,
                price: Number(price * 1 + freight * 1).toFixed(2),
                freight: freight,
                deliveryDate: deliveryDate,
              })
            );
            setProcessing(false);
            navigate("/cart");
          });
        }
      );
    } else {
      if (
        values.Quantity < 10 ||
        !values.StickerType ||
        !values.StickerSize ||
        !values.ImprintColors ||
        !values.ArtworkInstruction
      ) {
        setProcessing(false);
        alert("Please select all the values 2.");
        return;
      }
      dispatch(
        addProduct({
          serial: Math.random() * 10000 + 20000,
          ...product,
          ...values,
          price: Number(price * 1 + freight * 1).toFixed(2),
          freight: freight,
          deliveryDate: deliveryDate,
        })
      );
      navigate("/cart");
    }
  };
  // Always load page on top
  Scroller();

  return (
    <div className="product-si default">
      {modalImg && <Modal modalImg={modalImg} setModalImg={setModalImg} />}
      <div className="wrapper">
        <div className="col">
          <img
            src={product.video ? product.video : product.img}
            alt=""
            className="product-si-img"
            loading="lazy"
          />
        </div>
        <div className="col">
          <div className="product-si-info">
            <h2 className="header">{product.title}</h2>
            <h4 className="header-medium">
              Price Per Sticker - {product.twoQ_10000}+
            </h4>
            <Slideshow
              modalImg={modalImg}
              setModalImg={setModalImg}
              images={product.img}
            />
            {/* Form starts here */}
            <form action="" onSubmit={handleClick} className="product-si-form">
              <label className="text-regular" htmlFor="quantity">
                Select Quantity
              </label>
              <input
                type="number"
                className="input text-regular"
                name="Quantity"
                min="50"
                max="10000"
                placeholder="Select Quantity (Min 50)"
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Quantity Must Be Greater Than 50 And Less Than 10000"
                  )
                }
                onInput={(e) => e.target.setCustomValidity("")}
                onChange={handleChange}
              />
              {custom.map((item, indx) => (
                <SelectMenu
                  item={item}
                  key={indx}
                  values={values}
                  setValues={setValues}
                />
              ))}
              {values.ArtworkType === "Upload Artwork" && (
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="input text-regular"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Please upload your artwork")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              )}
              {values.ArtworkType === "Help With Artwork" && (
                <textarea
                  type="text"
                  rows="5"
                  onChange={handleChange}
                  name="ArtworkInstruction"
                  className="input text-regular"
                  required
                  placeholder="Provide Artwork Instructions"
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Please provide artwork instruction."
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              )}
              <div className="date-picker">
                <div className="wrapper">
                  {businessDays.map((date, indx) => (
                    <DatePicker
                      date={date}
                      indx={indx}
                      key={indx}
                      selectedDate={selectedDate === date}
                      setSelectedDate={setSelectedDate}
                      setFreight={setFreight}
                      setDeliveryDate={setDeliveryDate}
                    />
                  ))}
                </div>
              </div>
              <PrimaryButton
                text={processing ? "processing..." : "add to cart"}
              />
            </form>
          </div>
        </div>
      </div>
      <HeaderPrimary headers={headers} />
      <p className="text-medium product-details">{product.desc}</p>
    </div>
  );
};

export default Product;
