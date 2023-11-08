import {  NavLink} from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/086 crown.svg";
import CartIcon from '../../components/cart-icon/cart-icon.component';

import "./navigation.styles.scss";
import { useSelector } from "react-redux";
import { signOutUser } from "../../utilist/firebase/firebase.utilis";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <div className="navigation">
     
      <NavLink className="logo-container" to="/">
        <CrownLogo className="logo" />
      </NavLink>
      <div className="nav-links-container">
        <NavLink className="nav-link" to="/shop">
          SHOP
        </NavLink>
        {currentUser ? (
            <NavLink as="span"  onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
        <CartIcon />
     
      </div>
   
    </div>
    
  );
};
export default Navigation;
