import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./ProductList.scss";

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2]
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }
    return (

        <div className="list-container">
            <Navbar />
            <Announcement />
            <h1>{cat}</h1>
            <div className="plist-filter-container">
                <div className="list-filter">
                    <h2>Filter Products:</h2>
                    <select name="color" id="color" onChange={handleFilters}>
                        <option disabled>Color</option>
                        <option>white</option>
                        <option>black</option>
                        <option>red</option>
                        <option>blue</option>
                        <option>yellow</option>
                        <option>green</option>
                    </select>
                    <select name="size" onChange={handleFilters}>
                        <option disabled>Size</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                </div>
                <div className="list-filter">
                    <h2>Sort Products:</h2>
                    <select onChange={(e) => setSort(e.target.value)}>
                        <option value="Newest">Newest</option>
                        <option value="asc">Price (asc)</option>
                        <option value="desc">Price (desc)</option>
                    </select>
                </div>
            </div>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default ProductList;