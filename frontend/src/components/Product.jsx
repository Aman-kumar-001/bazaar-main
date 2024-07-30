
import "./Product.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Product = ({ item }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (

    <div className="product-card" onClick={() => navigate(`/product/${item._id}`)}>
      {/* <Link to={`/product/${item._id}`}> */}
      <div className="thumbnail">
        <img src={item.img} alt="" />
      </div>
      {/* </Link> */}
      <div className="prod-details">
        <span className="name">{item?.title}</span>
        <span className="price">&#8377; {item?.price}</span>
      </div>
    </div>
  );
};


export default Product;