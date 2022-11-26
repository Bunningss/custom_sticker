import "./Contact.css";
import { Scroller } from "../../static";
import { useState, useRef } from "react";
import SecondaryButton from "../../Components/SecondaryButton/SecondaryButton";
import phone from "../../assets/icons/phone-green.png";
import email from "../../assets/icons/email-green.png";
import location from "../../assets/icons/location-green.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [processing, setPorcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPorcessing(true);
    emailjs
      .sendForm(
        "service_eiboynh",
        "template_lzygkxe",
        formRef.current,
        "ZFdpndrA2VyADKPkr"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setPorcessing(false);
          alert("Message Delivered");
        },
        (error) => {
          setPorcessing(false);
          // console.log(error.text);
          alert("Sending Failed");
        }
      );
  };

  //load on top
  Scroller();

  return (
    <div className="contact default">
      <div className="wrapper main-wrapper">
        <div className="row">
          <div className="col">
            <img src={phone} alt="" className="icon-small" />
            <p className="text-regular">+987654321</p>
          </div>
          <div className="col">
            <img src={email} alt="" className="icon-small" />
            <p className="text-regular">email@email.com</p>
          </div>
          <div className="col">
            <img src={location} alt="" className="icon-small" />
            <p className="text-regular">
              4000 Greenbriar Dr, Ste 200, <br /> Stafford, TX 77477
            </p>
          </div>
        </div>
        <div className="row">
          <h2 className="header">contact us</h2>
          <form
            action=""
            onSubmit={handleSubmit}
            className="contact-form"
            ref={formRef}
          >
            <input
              name="user_name"
              placeholder="Enter Your Name"
              type="text"
              required
              className="form-input text-regular"
            />
            <input
              name="user_email"
              placeholder="Enter Email Address"
              type="email"
              required
              className="form-input text-regular"
            />
            <input
              name="user_subject"
              placeholder="Subject"
              type="text"
              required
              className="form-input text-regular"
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              required
              className="form-input text-regular"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <SecondaryButton
              text={processing ? "Processing..." : "Send Message"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
