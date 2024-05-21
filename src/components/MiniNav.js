import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { showMiniNav } from "../redux/actions";
import { useSelector, useDispatch } from 'react-redux';


const MiniNav = ({vis}) => {
  const SMNstate = useSelector(state => state.miniNavR);
  const state = useSelector(state => state.addToCartR);

  const dispatch = useDispatch();

  const handleMiniNavVisibility = () => {
    dispatch(showMiniNav(!SMNstate));
  }

  return (
    <div className={vis ? 'mini__nav mini__nav_active' : 'mini__nav'} onClick={handleMiniNavVisibility} >
    <ul className="miniNav__ul">
      <li><Link to='/sellingPS3games/' >Home</Link></li>
      <li className="dropdown">
          <ul>
            <Link to='/sellingPS3games/products/action'><li>Actions</li></Link>
            <Link to='/sellingPS3games/products/sports'><li>Sports</li></Link>
            <Link to='/sellingPS3games/products/adventure'><li>Adventures</li></Link>
            <Link to='/sellingPS3games/products/racing'><li>Racing</li></Link>
          </ul>
      </li>
      <li><HashLink to='/sellingPS3games/#gallery' smooth >Galery</HashLink></li>
      <li><HashLink to='/sellingPS3games/#contact' smooth >Contact</HashLink></li>
      <hr className="miniNav__hr"/>
      <li className="shoppingCart__btn"><Link to='/sellingPS3games/cart'><i className="fa fa-shopping-cart" ></i><b>{state.length}</b></Link></li>
    </ul>
  </div>
  )
}


export default MiniNav;