import { createAction } from "../../utilist/firebase/reducer/reducer.utils";
import CATEGORIES_ACTION_TYPES from "./category.types";
export const setCategoriesMap=(CategoriesMap)=>
    createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,CategoriesMap);
