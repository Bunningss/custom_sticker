import "./OrderItem.css";

const OrderItem = ({ order }) => {
  return (
    <div className="order-item">
      <div className="wrapper">
        <div className="order-info">
          <p className="text-medium">
            Order Date: <span>{new Date(order.createdAt).toDateString()}</span>
          </p>
          <p className="text-medium">
            Email: <span>{order.email}</span>
          </p>
          <p className="text-medium">
            Phone: <span>{order.phone}</span>
          </p>
          <p className="text-medium">
            Delivery Address: <span>{order.deliveryAddress}</span>
          </p>
          <p className="text-medium">
            Order total: <span>{order.total}$</span>
          </p>
          <p className="text-medium order-status">
            Order Status:{" "}
            <span className={`${order.status}`}>{order.status}</span>
          </p>
        </div>
        {order.details &&
          order.details.map((item, indx) => (
            <div className="order-details" key={indx}>
              <h4 className="title order-title">Item {indx + 1}</h4>
              <p className="text-medium">
                Product Name: <span>{item.productName}</span>
              </p>
              <p className="text-medium">
                Order Instuction: <span>{item.instruction}</span>
              </p>
              <p className="text-medium">
                Product Quantity: <span>{item.quantity}</span>
              </p>
              <p className="text-medium">
                Product Size: <span>{item.size}</span>
              </p>
              <p className="text-medium">
                Product Type: <span>{item.type}</span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OrderItem;
