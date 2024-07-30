import { Add, Remove, Delete } from "@material-ui/icons";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "./Cart.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { incrementQuantity, decrementQuantity, removeItem } from "../redux/cartRedux";
import { useDispatch } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';


const Cart = () => {
  const cart = useSelector(state => state.cart)
  // console.log(cart);

  const navigate = useNavigate();
  const dispatch = useDispatch()

  //Payment integration
  const makePayment = async () => {
    console.log(cart);
    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

    const body = {
      products: cart.products
    }

    const headers = {
      'Content-Type': 'application/json',
    }

    const response = await fetch("http://localhost:5000/api/create-checkout-session", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id
    });

    if (result.error) {
      console.log(result.error)
    }

  }
  return (
    <>
      <Navbar />
      <Announcement />
      <div className="wrapper">
        <h1>YOUR BAG</h1>
        <hr />
        <div className="top">
          <button onClick={() => navigate("/")}>CONTINUE SHOPPING</button>
          <div className="text">
            <h2>Shopping Bag(2)</h2>
            <h2>Your Wishlist (0)</h2>
          </div>
          <button>CHECKOUT NOW</button>
        </div>
        <div className="bottom">
          <div className="info">
            {!cart.products.length && <div className="empty-cart">
              <img src="https://rackstore.be/assets/images/empty-cart.png" alt="sorry" />
              <p> Your cart is empty.</p>
              <span>Add something to make me happy :)</span>
            </div>}
            {cart.products.map((product) => (
              <div className="product" key={product._id} product={product}>
                <div className="product-detail">
                  <img src={product.img} alt="" />
                  <div className="details">
                    <div className="product-name">
                      <b>Product:</b> {product.title}
                    </div>
                    <div className="product-id">
                      <b>ID:</b> {product._id}
                    </div>
                    <div className="product-color">
                      <b>Color:</b> {product.color}
                    </div>
                    <div className="product-size">
                      <b>Size:</b> {product.size}
                    </div>
                  </div>
                </div>

                <div className="PriceDetail">
                  <button onClick={() => dispatch(removeItem(product))}><Delete /></button>
                  <div className="ProductAmountContainer">
                    <div className="quantity-btn">
                      <span onClick={() => dispatch(decrementQuantity(product))}><Remove /></span>
                      <span>{product.quantity}</span>
                      <span onClick={() => dispatch(incrementQuantity(product))}><Add /></span>
                    </div>
                  </div>
                  <div className="ProductPrice">&#8377; {product.price * product.quantity}.00</div>

                </div>
                {/* <button onClick={() => dispatch(removeItem(product))}><Delete /></button> */}

              </div>))}
            <hr />
          </div>

          <div className="summary">
            <div className="SummaryTitle">
              ORDER SUMMARY
            </div>
            <div className="SummaryItem">
              <div className="SummaryItemText">SubTotal</div>
              <div className="SummaryItemPrice">&#8377; {cart.total}.00</div>
            </div>
            <div className="SummaryItem">
              <div className="SummaryItemText">Estimated Shipping</div>
              <div className="SummaryItemPrice">&#8377; 30.90</div>
            </div>
            <div className="SummaryItem">
              <div className="SummaryItemText">Shipping Discount</div>
              <div className="SummaryItemPrice">&#8377; -30.90</div>
            </div>
            <hr />
            <div className="SummaryItem">

              <div className="SummaryItemText" type="total"><span> Total</span></div>
              <div className="SummaryItemPrice"> <span>&#8377; {cart.total}.00</span></div>

            </div>
            <button onClick={makePayment}>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;