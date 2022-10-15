import './OrderItem.css';
import demo from '../../assets/stickers/bum-stc.png';

const Order_Item = () => {
  return (
    <div className='order-item'>
        <div className="row">
            <div className="col">
                Image
            </div>
            <div className="col">
                <img className='image' loading='lazy' src={demo} alt="" />
            </div>
        </div>
        <div className="row">
            <div className="col">
                Details
            </div>
            <div className="col">
                <p className="text-regular">Die Cut Stickers</p>
                <p className="text-regular">2inx2in</p>
                <p className="text-regular">Random Cut</p>
                <p className="text-regular">2 Color</p>
                <p className="text-regular">Help With Artwork</p>
                <p className="text-regular">Delivery: 15 Days From Order</p>
            </div>
        </div>
        <div className="row">
            <div className="col">
                Additional Details
            </div>
            <div className="col">
                <p className="text-regular"><span>Total:</span> 999.9$</p>
                <p className="text-regular"><span>Order:</span> 1 October 2022</p>
                <p className="text-regular"><span>Delivery:</span> 1 October 2022</p>
            </div>
        </div>
    </div>
  )
}

export default Order_Item