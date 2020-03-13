import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crwn.svg';
import { createStructuredSelector } from 'reselect';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden} from '../../redux/cart/cart.selector';
import { selectCurrentUser} from '../../redux/user/user.selector';

const Header = ({currentUser,hidden}) => (
    <div className='header'>
      <Link className='logo-container' to ='/'>
          <Logo className='logo' />
          </Link>
    <div className='options'>
        <Link className='option' to='/shop'>
            SHOP</Link>
            <Link className='option' to='/shop'>
            CONTACT</Link>
            {
                currentUser?
                <div className='option' onClick={() => auth.signOut()}>SIGNOUT</div> :
                <Link className='option' to='/signin'>SIGNIN</Link>
            }
            <CartIcon/>
            
    </div>
    {hidden? null:<CartDropdown/>}
    </div>
);
const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})
export default connect(mapStateToProps)(Header);
