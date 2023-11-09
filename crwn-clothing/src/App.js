import Authentication from "./routes/authentication/authentication.component.jsx";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.component.jsx";
import { Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/shop.component.jsx";
import { setCurrentUser } from "./store/user/user.action.js";
import { onAuthStateChangedListener,createUserDocumentFromAuth } from "./utilist/firebase/firebase.utilis.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

 
  return (
    <>
      <Navigation />
      <Routes>
        
          <Route path="/" element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
     
       
      </Routes>
     
    </>
  );
};

export default App;
