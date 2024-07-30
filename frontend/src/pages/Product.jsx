
import { Add, Remove } from "@material-ui/icons";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../utils/requestMethod";
import "./Product.scss";
import { addToCart } from "../redux/cartRedux";
import { useDispatch } from "react-redux";


const Product = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct()
  }, [id]);

  const handleQuantity = (type) => {
    if (type === 'desc') {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    dispatch(
      addToCart({ ...product, quantity, color, size })
    )
  };
  return (

    <>
      <Navbar />
      <Announcement />
      <div className="single-product-main-content">
        <div className="layout">
          <div className="single-product-page">
            <div className="left">
              <img src={product.img} alt="" />
            </div>
            <div className="right">
              <span className="name">{product.title}</span>
              <span className="desc">{product.desc}</span>
              <span className="price">&#8377; {product.price}</span>

              <div className="filter-Container">
                <div className="filter" onChange={(e) => setColor(e.target.value)}>
                  <form action="#">
                    <label htmlFor="color">Color:</label>
                    <select name="color" id="color">
                      <option value="color">Choose Color</option>
                      {product.color?.map((c) => {
                        return (<option value={c} key={c} >{c}</option>)
                      })
                      }
                    </select>
                  </form>
                </div>

                <div className="filter" onChange={(e) => setSize(e.target.value)}>
                  <form action="#">
                    <label htmlFor="size">Size:</label>
                    <select name="size" id="size"  >
                      <option value="size">Choose Size</option>
                      {product.size?.map((s) => {
                        return (<option value={s} key={s}>{s}</option>)
                      })
                      }
                    </select>
                  </form>
                </div>
              </div>
              <div className="cart-buttons">
                <div className="quantity-buttons">
                  <span onClick={() => handleQuantity("desc")} ><Remove /></span>
                  <span>{quantity}</span>
                  <span onClick={() => handleQuantity("inc")}><Add /></span>
                </div>
                <button className="add-to-cart-button" onClick={handleClick}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Product;