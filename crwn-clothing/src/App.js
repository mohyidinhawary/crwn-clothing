import Authentication from "./routes/authentication/authentication.component.jsx";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.component.jsx";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return <div>hello I am Shopping Page</div>;
};
const App = () => {
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
