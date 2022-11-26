import "./OrderItem.css";

const OrderItem = ({ item }) => {
  return (
    <div className="admin-order-item">
      <div className="col">
        <img src={item.img} alt="" className="artwork-img" />
      </div>
      <div className="col">
        <p className="text-medium">
          ProductID: <span>{item.productID}</span>
        </p>
        <p className="text-medium">
          Product Title: <span>{item.productName || item.title}</span>
        </p>
        <p className="text-medium">
          Custom Order: <span>{item.custom && item.custom.toString()}</span>
        </p>
        <p className="text-medium">
          Artwork Instruction: <span>{item.instruction}</span>{" "}
        </p>
        <a
          className="underline text-medium"
          target="_blank"
          href={item.artwork}
        >
          Artwork File: <span>{item.artwork}</span>{" "}
        </a>
        <p className="text-medium">
          Imprint Colors: <span>{item.color}</span>{" "}
        </p>
        <p className="text-medium">
          Product Quantity: <span>{item.quantity}</span>
        </p>
        <p className="text-medium">
          Product Size:<span> {item.size}</span>
        </p>
        <p className="text-medium">
          Product Type:<span> {item.type}</span>
        </p>
        <p className="text-medium">
          Product Material:<span> {item.material}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderItem;
