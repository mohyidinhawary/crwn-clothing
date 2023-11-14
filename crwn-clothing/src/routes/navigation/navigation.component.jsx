import { Fragment } from 'react';

import { ReactComponent as CrownLogo } from "../../assets/086 crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';
import { useSelector } from "react-redux";
import { signOutUser } from "../../utilist/firebase/firebase.utilis";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <Fragment>
    <NavigationContainer>
      <LogoContainer to='/'>
        <CrownLogo className='logo' />
      </LogoContainer>
      <NavLinks>
        <NavLink to='/shop'>SHOP</NavLink>

        {currentUser ? (
          <NavLink as='span' onClick={signOutUser}>
            SIGN OUT
          </NavLink>
        ) : (
          <NavLink to='/auth'>SIGN IN</NavLink>
        )}
        <CartIcon />
      </NavLinks>
      {isCartOpen && <CartDropdown />}
    </NavigationContainer>
    
  </Fragment>
  );
};
export default Navigation;
