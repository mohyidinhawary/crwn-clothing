import { useState } from "react";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utilist/firebase/firebase.utilis.js";
import ProductCard from "../../components/product-card/product-card.component.jsx";

const Shop = () => {
    
    const[products,setProducts]=useState({});
    const getCategoriesMap=async()=>{
        const categoryMap=await getCategoriesAndDocuments();
       console.log(categoryMap);
       console.log(products);
        setProducts(categoryMap);

      
      }
      useEffect(()=>{
        getCategoriesMap();
   
          },[])
    return (
      <div className='products-container'>
        {Object.values(products).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  };
  
  export default Shop;
