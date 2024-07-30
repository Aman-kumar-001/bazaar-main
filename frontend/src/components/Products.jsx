
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Products.scss";

const Products = ({ cat, filters, sort }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");
                setProducts(res.data);
            } catch (error) {
                // res.error(error)

            }
        };
        getProducts()
    }, [cat]);

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter(item => Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)))
        )
    }, [products, cat, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts(prev => [...prev].sort((a, b) => a.createdAt - b.createdAt))
        } else if (sort === "asc") {
            setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price))
        } else {
            setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price))
        }
    }, [sort])

    return (
        <div className="products-container">
            {/* <div className="sec-heading">Popular Products</div> */}
            {/* {!innerpage && <div className="sec-heading">{headingText}</div>} */}

            <div className="products">
                {(products.length !== 0) ? (cat ? filteredProducts.map((item) => (
                    <Product item={item} key={item.id} />
                )) : products.slice(0, 8).map((item) => (
                    <Product item={item} key={item.id} />
                ))) : <h1>Loading...</h1>}
            </div>
        </div>
    );
};

export default Products;