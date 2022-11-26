import "./Faqs.css";
import { faqs, Scroller } from "../../static";
import HeaderPrimary from "../../Components/HeaderPrimary/HeaderPrimary";
import DropdownItem from "../../Components/DropdownItem/DropdownItem";

const Faqs = () => {
  const headers = {
    small: "FAQs",
    large: "Ask us anything",
  };

  // Alwasys load page on top
  Scroller();

  return (
    <div className="faqs default main-wrapper">
      <HeaderPrimary headers={headers} />
      <div className="wrapper">
        {faqs.map((faq, indx) => (
          <DropdownItem faq={faq} key={indx} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
