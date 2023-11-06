import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/086 crown.svg";
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <div className="navigation">
     
      <Link className="logo-container" to="/">
        <CrownLogo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <Link className="nav-link" to="/auth">
          SIGN IN
        </Link>
        <CartIcon />
     
      </div>
   
    </div>
    
  );
};
export default Navigation;
