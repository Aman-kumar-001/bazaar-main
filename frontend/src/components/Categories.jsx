
import { categories } from "../utils/data";
import CategoryItem from "./CategoryItem";
import "./Categories.scss";


const Categories = () => {
    return (
        <div className="categories">
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Categories;