import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useSelector } from 'react-redux';

const MainNav = () => {

  const state = useSelector(state => state.addToCartR);

  return (
    <div className="mainNav__wrapper">
      <ul className="mainNav__ul">
        <li><Link to='/sellingPS3games'>Home</Link></li>
        <li className="dropdown">
          <button className="dd__btn">Products</button>
          <div className="dropdown__menu">
            <ul>
              <Link to='/sellingPS3games/products/action'><li>Actions</li></Link>
              <Link to='/sellingPS3games/products/sports'><li>Sports</li></Link>
              <Link to='/sellingPS3games/products/adventure'><li>Adventures</li></Link>
              <Link to='/sellingPS3games/products/racing'><li>Racing</li></Link>
            </ul>
          </div>
        </li>
        <li><HashLink to='/sellingPS3games/#gallery' smooth>Galery</HashLink></li>
        <li><HashLink to='/sellingPS3games/#contact' smooth>Contact</HashLink></li>
        <li className="shoppingCart__btn"><Link to='/sellingPS3games/cart'><i className="fa fa-shopping-cart"></i><b>{state.length}</b></Link></li>
      </ul>
    
    </div>
  )
}

export default MainNav;