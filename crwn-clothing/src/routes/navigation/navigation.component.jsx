import { NavLink } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/086 crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import "./navigation.styles.scss";
import { useSelector } from "react-redux";
import { signOutUser } from "../../utilist/firebase/firebase.utilis";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
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
          <NavLink as="span" onClick={signOutUser}>
            SIGN OUT
          </NavLink>
        ) : (
          <NavLink to="/auth">SIGN IN</NavLink>
        )}
        <CartIcon />
        {isCartOpen && <CartDropdown />}
      </div>
    </div>
  );
};
export default Navigation;
