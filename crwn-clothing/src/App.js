import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.component.jsx";
import {Routes,Route} from "react-router-dom"
import SignIn from "./routes/sign-in/sign-in.component.jsx";
const Shop=()=>{
  return(
    <div>
      hello I am Shopping Page
    </div>
  )
}
const App = () => {
  

  return(
    <>
    <Navigation />
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/shop" Component={Shop} />
      <Route path="/sign-in" Component={SignIn} />
    </Routes>
    
    </>
  );
};

export default App;
