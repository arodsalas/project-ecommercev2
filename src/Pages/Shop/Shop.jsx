//ORIGINAL
// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { ShopContext } from "../../context/shop-context";
// import "./Shop.css";

// export const Shop = () => {
//   const [products, setProducts] = useState([]);
//   const { cart, addToCart } = useContext(ShopContext);

//   useEffect(() => {
//     const fetchAllProducts = async () => {
//       try {
//         const res = await axios.get("http://localhost:8800/products");
//         setProducts(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Products</h1>
//       <div className="products-container">
//         {products.map((product) => (
//           <div key={product.id} className="product-item">
//             <img src={product.image} alt={product.name} />
//             <div className="product-details">
//               <h2>{product.name}</h2>
//               <p>{product.description}</p>
//               <span className="product-price">${product.price}</span>
//               <button onClick={() => addToCart(product)}>
//                 {cart?.find((item) => item.id === product.id)
//                   ? "In cart"
//                   : "Add to cart"}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


 //NEW ONE WITH FILTERS
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShopContext } from "../../context/shop-context";
import "./Shop.css";
import { PRODUCTS } from "../../Products";
// import {PRODUCTS} from './Products'

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const { cart, addToCart } = useContext(ShopContext);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8800/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (searchPrice === "" || product.price <= parseInt(searchPrice))
    );
  });

  return (
    <div>
      <h1>Products</h1>
      <div className="search-filters">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="number"
          placeholder="Search by Maximum Price"
          value={searchPrice}
          onChange={(e) => setSearchPrice(e.target.value)}
        />
      </div>
      <div className="products-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <span className="product-price">${product.price}</span>
              <button onClick={() => addToCart(product)}>
                {cart?.find((item) => item.id === product.id)
                  ? "In cart"
                  : "Add to cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
