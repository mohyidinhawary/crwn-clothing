import Authentication from "./routes/authentication/authentication.component.jsx";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.component.jsx";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "./utilist/firebase/firebase.utilis.js";
import SHOP_DATA from"./126 shop-data.js"
const Shop = () => {
  
  return <div>hello I am Shopping Page</div>;
};
const App = () => {
  const getCategoriesMap=async()=>{
    const categoryMap=await getCategoriesAndDocuments();
    console.log(categoryMap);
  }
  useEffect(()=>{
    getCategoriesMap();
      },[])
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/shop" Component={Shop} />
        <Route path="/auth" Component={Authentication} />
      </Routes>
    </>
  );
};

export default App;
