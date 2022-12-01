import "./AddProduct.css";
import { useState } from "react";
import { Scroller } from "../../../../static";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { userReq } from "../../../../Utilities/requestMethods";
import app from "../../../../firebase";
import Sidebar from "../../Components/Sidebar/Sidebar";
import PrimaryButton from "../../../../Components/PrimaryButton/PrimaryButton";
import { priceList } from "../../../../priceChart";

const AddProduct = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState([]);
  const [video, setVideo] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [urls, setUrls] = useState([]);
  const [processing, setProcessing] = useState(false);
  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setFile((prevState) => [...prevState, newImage]);
    }
  };

  // Actual Product Creation
  const createProduct = async (data) => {
    try {
      const res = await userReq.post("/products", data);
      setMessage(res.data.msg);
      console.log(message);
    } catch (err) {
      setMessage("An error occured.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    if (video) {
      const filename = new Date().getTime() + video.name;

      //  Firebase Upload
      const storage = getStorage(app);
      const storageRef = ref(storage, filename);

      const uploadTask = uploadBytesResumable(storageRef, video);
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
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setVideoUrl(downloadURL);
          });
        }
      );
    }
    file.map((fi) => {
      const filename = new Date().getTime() + fi.name;

      //  Firebase Upload
      const storage = getStorage(app);
      const storageRef = ref(storage, fi.name);

      const uploadTask = uploadBytesResumable(storageRef, filename);
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
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              urls.push(downloadURL);
            })
            .then(() => {
              if (file.length === urls.length) {
                const info = new FormData(e.target);
                const data = Object.fromEntries(info.entries());
                const product = { ...data, img: urls, video: videoUrl };
                createProduct(product);
                setProcessing(false);
              }
            });
        }
      );
    });
  };

  // Load on top
  Scroller();
  return (
    <div className="edit-prod default">
      <div className="row">
        <Sidebar />
      </div>
      <div className="row">
        <div className="wrapper">
          <form action="" className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              className="input"
              placeholder="Product Title"
              required
            />
            {/* Price Chart */}
            {priceList.map((item, indx) => (
              <input
                key={indx}
                type="number"
                step="0.01"
                name={item.name}
                className="input"
                placeholder={item.placeholder}
                required
              />
            ))}

            <textarea
              rows={5}
              type="text"
              name="desc"
              className="input"
              placeholder="Product Details"
              required
            />
            <div className="group">
              <label htmlFor="image" className="input-label">
                Select Multiple Images
              </label>
              <input
                type="file"
                name="image"
                className="input"
                onChange={handleChange}
                multiple
                required
              />
            </div>
            <div className="group">
              <label htmlFor="video" className="input-label">
                Select Video
              </label>
              <input
                type="file"
                name="video"
                className="input"
                onChange={(e) => setVideo(e.target.files[0])}
              />
            </div>
            {message && <p className="success-message">{message}</p>}
            <PrimaryButton text={processing ? "Processing" : "Add product"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
