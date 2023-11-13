import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getCategoriesAndDocuments } from "../../utilist/firebase/firebase.utilis.js";
import { setCategoriesMap } from "../../store/categories/category.action.js";
import CategoriesPreview from "../categories-preview/categories-preview.component.jsx";

import Category from "../category/category.component.jsx";
const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
