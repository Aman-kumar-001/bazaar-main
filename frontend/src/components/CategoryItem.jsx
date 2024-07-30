
import { Link } from "react-router-dom";
import "./CategoryItem.scss";


const CategoryItem = ({ item }) => {
  return (
    <div className="categoryItem">
      <Link to={`/products/${item.cat}`} >
        <img className="cat-img" src={item.img} alt="" />
        <div className="info">
          <h1>{item.title}</h1>
          <div className="cat-btn">Shop Now</div>
        </div>
      </Link>
    </div>
  );
};


export default CategoryItem;
